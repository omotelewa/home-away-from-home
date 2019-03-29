import React, { Component } from 'react';
import './App.css';
import Home  from "./Home";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signup from "./signup/signup" ;

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/signup" component={Signup}/>
        </Switch>
        <Home />
      </div>
      </Router>
      
       




    )
  }
}



export default App;
