
import { Route, Switch, useHistory } from "react-router-dom";

import SessionStorageService from "./services/SessionStorageService";

import Home from "./pages/Home";
import Login from './pages/Login';
import Report from "./pages/Report";

import './App.css';

function setToken(token) {
  if (token !== undefined) {
    localStorage.setItem("token", JSON.stringify(token));
  }

}


function App() {

  const token = SessionStorageService.getToken();

    let history = useHistory();
    
    if(!token) {
        history.push("/login");
    } 
    // else {
    //   history.push('/')
    // }
 

  return (
    <div>
      <Switch>
        <Route exact path="/login">
          <Login setToken={setToken}/>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/dummy-report">
          <Report />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
