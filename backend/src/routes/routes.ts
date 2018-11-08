import { Router, Request, Response, NextFunction } from "express";

import TweetController from "../controllers/TweetController";
import LikeController from "../controllers/LikeController";

class Routes {
  public router: Router;

  constructor() {
    this.router = Router();
    this.init();
  }

  init() {
    this.router.get("/tweets", this.tweets);
    this.router.post("/tweets", this.tweets);

    this.router.post("/likes/:id", this.likes);
  }

  private tweets(req: Request, res: Response, next: NextFunction) {
    switch (req.method) {
      case "GET":
        return TweetController.getTweets(req, res, next);
      case "POST":
        return TweetController.addTweets(req, res, next);
    }
  }

  private likes(req: Request, res: Response, next: NextFunction) {
    return LikeController.addLike(req, res, next);
  }
}

export default Routes;
