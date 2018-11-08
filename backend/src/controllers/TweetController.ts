import Tweet from "../database/models/Tweet";
import { Request, Response, NextFunction } from "express";

class TweetController {
  constructor() {}

  addTweets = async (req: Request, res: Response, next: NextFunction) => {
    const tweet = await Tweet.create(req.body);
    req["io"].emit("tweet", tweet);
    return res.json(tweet);
  };

  getTweets = async (req: Request, res: Response, next: NextFunction) => {
    const tweets = await Tweet.find({}).sort("-createdAt");
    return res.json(tweets);
  };
}

export default new TweetController();
