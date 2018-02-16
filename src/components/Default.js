import React, { Component } from 'react';
import Header from './Header.js'
import Body from './Body.js'
import Footer from './Footer.js'

class Default extends Component {

  render(){

    return(
      <div>
        <Header />

        <Body />

        <Footer />
      </div>
    )
  }
}

export default Default;
