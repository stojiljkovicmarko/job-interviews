
import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Login from './pages/Login';

import './App.css';

function setToken(token) {
  if(token !== undefined) {
    localStorage.setItem("token", JSON.stringify(token));
  }
  
}

function getToken() {
  const token = localStorage.getItem("token");
  return JSON.parse(token);
}


function App() {

  const token = getToken();

  if (!token) {
    return (
      <Login setToken={setToken} />
    )
  }

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
