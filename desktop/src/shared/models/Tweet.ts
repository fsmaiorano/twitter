export default interface ITweet {
  _id?: any;
  author: string;
  content: string;
  likes?: number;
  createdAt?: Date;
}
