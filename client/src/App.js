import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import MainNavbar from "./components/Navbar";
import Home from "./pages/Home";
import Beach from "./pages/Beach";
import Snow from "./pages/Snow";

const App = () => {
    return (
      <div className="App">
        <MainNavbar />
        <Router >
          <Switch >
            <Route exact path="/" component={Home} />
            <Route exact path="/beach" component={Beach} />
            <Route exact path="/snow" component={Snow} />
          </Switch>
        </Router>
      </div>
    );
}

export default App;
