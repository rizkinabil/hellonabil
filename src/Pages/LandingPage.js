import React, { Component } from 'react';

import Header from 'Parts/Header';
import Hero from 'Parts/Hero';
import About from 'Parts/About';
import Techstack from 'Parts/Techstack';

export default class LandingPage extends Component {
  render() {
    return (
      <>
        <Header {...this.props}></Header>
        <Hero />
        <About />
        <Techstack />
      </>
    );
  }
}
