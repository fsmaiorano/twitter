import * as express from "express";
import { createServer, Server } from "http";
import * as socketIo from "socket.io";
import * as cors from "cors";
import database from "../database/database";
import routes from "../routes/routes";

class ServerExpress {
  public static readonly PORT: number = 4000;

  private app: express.Application;
  private server: Server;
  private io: SocketIO.Server;
  private port: string | number;

  constructor() {
    this.createApp();
    this.config();
    this.createServer();
    this.sockets();
    this.listen();
    this.middlewares();
    this.routes();
  }

  private createApp(): void {
    this.app = express();
    database.init();
  }

  private createServer(): void {
    this.server = createServer(this.app);
  }

  private sockets(): void {
    this.io = socketIo(this.server);
  }

  private middlewares(): void {
    this.app.use(cors());
    this.app.use(express.json());

    this.app.use((req, res, next) => {
      req["io"] = this.io;
      return next();
    });
  }

  private routes(): void {
    this.app.use("/api/", new routes().router);
  }

  private config(): void {
    this.port = process.env.PORT || ServerExpress.PORT;
  }

  private listen(): void {
    this.server.listen(this.port, () => {
      console.log("Running server on port %s", this.port);
    });

    this.io.on("connect", (socket: any) => {
      console.log("Connected client on port %s.", this.port);
      socket.on("message", (m: any) => {
        console.log("[server](message): %s", JSON.stringify(m));
        this.io.emit("message", m);
      });

      socket.on("disconnect", () => {
        console.log("Client disconnected");
      });
    });
  }

  public startApp(): express.Application {
    return this.app;
  }
}

export default new ServerExpress();
