import React, { useState } from "react";

import { useHistory } from "react-router-dom";
import "./login.css";

async function loginUser(credentials) {
  const url = "http://localhost:3333/login";

  const requestOptions = {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(credentials),
  };

  return fetch(url, requestOptions).then((response) => {
    if (response.status === 400) {
      alert("try again");
    }
    return response.json();
  });
}

function Login({ setToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  let history = useHistory();

  const submitHandler = async (event) => {
    event.preventDefault();

    const user = {
      email: email,
      password: password,
    };

    const token = await loginUser(user);
    setToken(token.accessToken);
    history.push("/home");
  };

  return (
    <div>
      <div className="form-wrapper">
        <h3 className="text-center">Please sign in</h3>
        <form>
          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={emailHandler}
              placeholder="email"
              id="email"
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              value={password}
              onChange={passwordHandler}
              placeholder="password"
              id="password"
              className="form-control"
            />
          </div>
          <button
            onClick={submitHandler}
            type="submit"
            className="btn btn-lg w-100 btn-custom"
          >
            {" "}
            SIGN IN{" "}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
