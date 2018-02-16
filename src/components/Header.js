import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  constructor(props){
    super(props);

    this.state = {
      count: 0
    }
  }

  render(){

    setTimeout( () => {
      this.setState({
        count: this.state.count + 1
      })
    }, 1000)

    return(

        <header className="App-header">
          <h1 className="App-title">Welcome to Devins first react!</h1>
          <p>Time your app has been active: {this.state.count} seconds</p>


            <button className="reset-btn" onClick={ e => this.state.count = -1}>
              Reset Timer
            </button>

            <nav>
              <Link to=""><h2>To do</h2></Link>
              <br/>
              <Link to=""><h2>Weather</h2></Link>
              <br/>
              <Link to=""><h2>Clock</h2></Link>
            </nav>
        </header>

    );
  }
}

export default Header;
