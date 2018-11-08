import { Request, Response, NextFunction } from "express";
import Tweet from "../database/models/Tweet";

class LikeController {
  constructor() {}

  addLike = async (req: Request, res: Response, next: NextFunction) => {
    let tweet = await Tweet.findById(req.params.id);

    tweet.set({ likes: tweet.likes + 1 });
    await tweet.save();
    req["io"].emit("like", tweet);
    return res.json(tweet);
  };
}

export default new LikeController();
