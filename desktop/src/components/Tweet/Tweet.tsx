import * as React from "react";
import api from "../../shared/services/api";
import ITweet from "../../shared/models/Tweet";

import like from "../../assets/like.svg";
import "./Tweet.scss";

interface IProps {
  tweet: ITweet;
}

class Tweet extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  handleLike = async () => {
    const { _id } = this.props.tweet;
    await api.post(`likes/${_id}`);
  };

  render() {
    const { tweet } = this.props;
    return (
      <li className="tweet">
        <strong>{tweet.author}</strong>
        <p>{tweet.content}</p>
        <button type="button" onClick={this.handleLike}>
          <img src={like} alt="like" />
          {tweet.likes}
        </button>
      </li>
    );
  }
}

export default Tweet;
