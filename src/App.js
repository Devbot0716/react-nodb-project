import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';//this is for routing
import Default from './components/Default.js';
import Login from './components/Login.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Router>
         <Switch>
           <Route exact path="/" component={ Default } />
           <Route path="/login" component={ Login } />
         </Switch>
       </Router>
      </div>
    );
  }
}

export default App;
