import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {


  render(){
    return(
      <div>
        <input onChange={this.handleUpdateUsername} placeholder="username" />
        <input placeholder="password" />
        <Link to="/">
          <button className="reset-btn"> Login </button>
        </Link>
      </div>
    )
  }
}




export default Login;
