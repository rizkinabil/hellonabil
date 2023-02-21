import React, { Component } from 'react';

import Header from 'Parts/Header';
import Hero from 'Parts/Hero';
import About from 'Parts/About';
import Techstack from 'Parts/Techstack';
import Showcase from 'Parts/Showcase';
import Footer from 'Parts/Footer';

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refProject = React.createRef();
  }

  componentDidMount() {
    document.title = 'Rizkinabil | Home';
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Header {...this.props}></Header>
        <Hero refProject={this.refProject} />
        <About />
        <Techstack />
        <Showcase refProject={this.refProject} />
        <Footer />
      </>
    );
  }
}
