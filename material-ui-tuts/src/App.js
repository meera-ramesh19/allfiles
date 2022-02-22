import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Routes , Route } from "react-router-dom";
import './App.css';
import Login from './components/login';
import Home from './components/home'
import Signup from './components/signup'
import Forgotpassword from './components/forgotpassword'
import Passwordconfirm from './components/passwordconfirm'
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { emphasize, withStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";

function App() {


  return (
    <Router>
    <div className="App">
      <header className="App-header">
        
      
      {/* <Navbar /> */}
      {/* <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/singup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/forgotpassword" component={Forgotpassword} />
      </Routes> */}
        <Home />
      
        <Signup/>
        <Login/>
      <Forgotpassword/>
      <Passwordconfirm/>
      </header>
    </div>
    </Router>
  );
}

export default App;

