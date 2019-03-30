import React, { Component } from 'react';
import './App.css';
import Home  from "./Home";
import {AppBar , Toolbar , Typography, Button} from '@material-ui/core'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signup from "./signup/signup" ;
import Login from "./login/login";

const toolbarTitle = {
  flex: '1',
  textAlign:'left'
}

const appBar =  {
  position: 'relative',
}

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
         <AppBar position="static" color="default" style={appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap style={toolbarTitle}>
            Company name
          </Typography>
          <Button>Features</Button>
          <Button>Enterprise</Button>
          <Button>Support</Button>
          <Button color="primary" variant="outlined">
            Signup
          </Button>
          <Button color="primary" variant="outlined">
            Login
          </Button>
        </Toolbar>
      </AppBar>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/Login" component={Login}/>
        </Switch>
       
      </div>
      </Router>
      
       




    )
  }
}



export default App;
