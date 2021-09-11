import React from "react";
import style from "./LoginStyle.css";
import axios from "axios";// ??? // 

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  setEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  setPassword = (event) => {
    this.setState({ password: event.target.value });
  };
  submitCredentials = () => {
    const payload = {
      email: this.state.email,
      password: this.state.password,
    };

    axios
      .post(`http://localhost:3333/login`, payload)
      .then((response) => {
        localStorage.setItem(
          "token",
          JSON.stringify(response.data.accessToken)
        );
        this.props.history.push("/admin/reports");
      })
      .catch((error) => alert("Invalid email or password"));
  };

  render() {
    return (
      <div className="container">
        <div className={style.wrapper}>
          <div className="row">
            <div className="col-lg-12">
              <label className={`${style.label} col-lg-12`}>Email</label>
              <input
                className={`${style.input} col-lg-12`}
                onChange={this.setEmail}
                type="email"
                placeholder="email"
              />
            </div>
            <div className="col-lg-12">
              <label className={`${style.label} col-lg-12`}>Password</label>
              <input
                className={`${style.input} col-lg-12`}
                onChange={this.setPassword}
                type="password"
                placeholder="password"
              />
              <button className={style.button} onClick={this.submitCredentials}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export { Login };
