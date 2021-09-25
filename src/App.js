import { useState } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";


import Admin from './pages/Admin';
import Home from "./pages/Home";
import Login from './pages/Login';
import Report from "./pages/Report";
import ReportOverviewModal from "./components/Report/ReportOverviewModal";
import SessionStorageService from './services/SessionStorageService';

import './App.css';
import CreateReport from './components/wizard/CreateReport';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(!!SessionStorageService.getItem('token'));

  if (!isLoggedIn) {
    return <Login onLogIn={setIsLoggedIn} />
  }

  return (
    <div>
      <Switch>
        <Route exact path="/login"><Login onLogIn={setIsLoggedIn} /></Route>
        <Route exact path="/home" component={Home}></Route>
        <Route exact path="/candidate-report/:id" component={Report}></Route>
        <Route exact path="/modal" component={ReportOverviewModal}></Route>
        <Route exact path="/admin" component={Admin}></Route>
        <Route exact path="/reports" component={Admin}></Route>
        <Route exact path="/create-report" component={CreateReport}></Route>
        <Redirect from="/" to="/home"></Redirect>
      </Switch>
    </div>
  );
}

export default App;
