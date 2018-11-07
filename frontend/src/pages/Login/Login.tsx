import * as React from "react";
import { History } from "history";

import "./Login.scss";
import twitter from "../../assets/twitter.svg";

interface IProps {
  history: History;
}

interface IState {
  username: string;
}

class Login extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { username: "" };
  }

  handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const { username } = this.state;
    if (!username.length) return;

    localStorage.setItem("@twitter:username", username);
    this.props.history.push("/timeline");
  };

  render() {
    return (
      <section className="login">
        <img src={twitter} alt="twitter-logo" />
        <form onSubmit={this.handleSubmit}>
          <input
            autoFocus={true}
            type="text"
            value={this.state.username}
            onChange={e => this.setState({ username: e.target.value })}
            placeholder="Nome de Usuário"
          />
          <button type="submit">Entrar</button>
        </form>
      </section>
    );
  }
}

export default Login;
