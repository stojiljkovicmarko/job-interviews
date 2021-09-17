
import { Route, Redirect, Switch, useHistory } from "react-router-dom";

import SessionStorageService from "./services/SessionStorageService";


import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Login from './pages/Login';
import Report from "./pages/Report";


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
    return <Login setToken={setToken} />
    //history.push("/login");
  }
  else {
    history.push('/home')
  }


  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/home" component={Home}></Route>
        <Route exact path="/candidate-report/:id" component={Report}></Route>
        <Route exact path="/modal" component={ReportOverviewModal}></Route>
        <Redirect from="/" to="/home"></Redirect>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
