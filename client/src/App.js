import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
<<<<<<< HEAD
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

=======
import MainNavbar from "./components/Navbar";
import Home from "./pages/Home";
import Beach from "./pages/Beach";
import Snow from "./pages/Snow";
>>>>>>> 396718107b3888e0029c86a9709532013e003d3f

const App = () => {
    return (
<<<<<<< HEAD
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
=======
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
>>>>>>> 396718107b3888e0029c86a9709532013e003d3f
}



export default App;
