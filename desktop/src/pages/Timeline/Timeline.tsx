import * as React from "react";
import socket from "socket.io-client";
import api from "../../shared/services/api";

import ITweet from "../../shared/models/Tweet";
import Tweet from "../../components/Tweet/Tweet";

import twitter from "../../assets/twitter.svg";

import "./Timeline.scss";

interface IProps {
  history: History;
}

interface IState {
  tweets: ITweet[];
  newTweet: string;
}

class Timeline extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { tweets: [], newTweet: "" };
  }

  async componentDidMount() {
    this.subscribeToEvents();
    const response = await api.get("tweets");
    this.setState({ tweets: response.data });
  }

  subscribeToEvents = () => {
    const io = socket("http://localhost:4000");

    io.on("tweet", (data: any) => {
      this.setState({ tweets: [data, ...this.state.tweets] });
    });

    io.on("like", (data: any) => {
      this.setState({
        tweets: this.state.tweets.map(
          tweet => (tweet._id === data._id ? data : tweet)
        )
      });
    });
  };

  handleNewTweet = async (event: React.KeyboardEvent) => {
    if (event.keyCode !== 13) return;

    let tweet: ITweet = {
      author: localStorage.getItem("@twitter:username") || "",
      content: this.state.newTweet
    };

    debugger;
    let response = await api.post("tweets", tweet);

    this.setState({ newTweet: "" });
  };

  render() {
    return (
      <section className="timeline">
        <img src={twitter} height={24} alt="twitter-logo" />
        <form>
          <textarea
            autoFocus={true}
            value={this.state.newTweet}
            onChange={e => this.setState({ newTweet: e.target.value })}
            onKeyDown={this.handleNewTweet}
            placeholder="O que está acontecendo?"
          />
        </form>
        <ul className="list">
          {this.state.tweets.map(tweet => (
            <Tweet key={tweet._id} tweet={tweet} />
          ))}
        </ul>
      </section>
    );
  }
}

export default Timeline;
