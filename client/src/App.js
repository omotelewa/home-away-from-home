import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import MainNavbar from "./components/Navbar";
import Home from "./pages/Home";
import Beach from "./pages/Beach";
import Snow from "./pages/Snow";
import YourHome from "./pages/YourHome/your-home";
import MoreInfo from "./pages/MoreInfo/more-info";

const App = () => {
  return (
    <div className="App">
      <MainNavbar />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/beach" component={Beach} />
          <Route exact path="/snow" component={Snow} />
          <Route exact path="/your-home" component={YourHome} />
          <Route exact path="/more-info" component={MoreInfo} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
