import React, {useSTate} from'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from '../Dashboard/Dashboard';
import Preferences from '../Preferences/Preferences';


import { BrowserRouter ,  Switch , Route, Link } from 'react-router-dom';





function App() {
 
  return (
  
   
   <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/preferences">
            <Preferences />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
   
  
}

export default App;
