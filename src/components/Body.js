import React, { Component } from 'react';

import ToDoList from './ToDoList.js';
import Login from './Login.js';

class Body extends Component {

  render(){

    return(

      <div id="container">

        <ToDoList />


      </div>

    );
  }
}

export default Body;
