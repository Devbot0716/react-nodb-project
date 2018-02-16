import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class Footer extends Component {

  render(){

    return(
      <footer>
        <div>
          <Link to='/login'>
            <button className="reset-btn"> Logout </button>
          </Link>
          <br />
          <br />
          <p>This React App was made by
            <a target='blank' href="https://github.com/Devbot0716"> Devbot0716</a>. Follow him on <a target='blank' href="https://github.com/Devbot0716"> Github
            </a>!</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
