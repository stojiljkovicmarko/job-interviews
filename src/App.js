
import { Route, Switch, useHistory } from "react-router-dom";

import SessionStorageService from "./services/SessionStorageService";

import Home from "./pages/Home";
import Login from './pages/Login';
import Report from "./pages/Report";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";


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

  if (!token) {
    history.push("/login");
  }
  // else {
  //   history.push('/')
  // }


  return (
    <div>

      <Header />
      <Switch>
      <Route exact path="/login">
          <Login setToken={setToken} />
        </Route>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/home" component={Home}></Route>
        <Route exact path="/candidate-report/:id" component={Report}></Route>
        <Route exact path="/modal" component={ReportOverviewModal}></Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
