
import { Route, Switch, useHistory } from "react-router-dom";

import SessionStorageService from "./services/SessionStorageService";

import Home from "./pages/Home";
import Login from './pages/Login';


import './App.css';
import ReportOverviewModal from "./components/Report/ReportOverviewModal";

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
        <Route exact path="/modal">
          <ReportOverviewModal />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
