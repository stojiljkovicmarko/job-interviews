import { useState } from 'react';
import { Route, Switch } from "react-router-dom";


import Home from "./pages/Home";
import Login from './pages/Login';
import Report from "./pages/Report";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import './App.css';
import ReportOverviewModal from "./components/Report/ReportOverviewModal";
import SessionStorageService from './services/SessionStorageService';


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(!!SessionStorageService.getItem('token'));

  console.log(isLoggedIn);

  if (!isLoggedIn) {
    return <Login onLogIn={setIsLoggedIn} />
  }

  return (
    <div>
      <Header />
      <Switch>
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
