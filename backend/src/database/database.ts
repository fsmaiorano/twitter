import * as mongoose from "mongoose";

class Database {
  constructor() {
    this.init();
  }

  init() {
    mongoose.connect(
      "mongodb://goweek:goweek123@ds253713.mlab.com:53713/twitter_goweek",
      {
        useNewUrlParser: true
      }
    );
  }
}

export default new Database();
