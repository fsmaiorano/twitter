import * as mongoose from "mongoose";

interface ITweet extends mongoose.Document {
  author: string;
  content: string;
  likes: number;
  createdAt: Date;
}

const TweetSchema = new mongoose.Schema({
  author: String,
  content: String,
  likes: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

export default mongoose.model<ITweet>("Tweet", TweetSchema);
