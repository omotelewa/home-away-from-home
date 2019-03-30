import React, { Component } from 'react';
import './App.css';
import Home  from "./Home";
import {Toolbar , Typography, Button} from '@material-ui/core'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signup from "./signup/signup" ;
import Login from "./login/login";
import { Link } from "react-router-dom";


const toolbarTitle = {
  flex: '1',
  textAlign:'left'
}


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Toolbar>
          <Typography variant="h6" color="inherit" noWrap style={toolbarTitle}>
            Company name
          </Typography>
          <Button>Features</Button>
          <Button>Enterprise</Button>
          <Button>Support</Button>
          <Link to="/signup">
          <Button color="inherit">Login</Button>
          </Link>
          <Link to= "/Login"><Button color="primary" variant="outlined">
            Signup
          </Button>
          </Link>
          
           
        </Toolbar>
        
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
