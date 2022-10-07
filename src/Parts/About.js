import React from 'react';

import bg from 'Assets/Images/about-bg.svg';
import linkedin from 'Assets/Images/Icons/logo-linkedin.svg';
import github from 'Assets/Images/Icons/logo-github.svg';
import email from 'Assets/Images/Icons/logo-email.svg';
import telegram from 'Assets/Images/Icons/logo-telegram.svg';

import { Slide, Fade } from 'react-awesome-reveal';

import Button from 'Elements/Button';

export default function About(props) {
  return (
    <div className="container about">
      <div className="desc-wrapper">
        <div className="col-6">
          <img className="img-fluid" src={bg} alt="background" />
        </div>

        <div className="col-6">
          <Slide direction="right" delay={800}>
            <div className="row title">
              <h1 className="font-weight-bold line-height-1">About Me</h1>
            </div>
          </Slide>

          <Slide direction="right" delay={100}>
            <div className="row desc">
              <p>
                I'm a frontend developer, my background in computer science has made
                me more interested in Software engineering and Data Science.{' '}
                <br />
                <br />
                I'd like to design and build interfaces. try my best to put all my
                hard work into the project so that it can be more useful in
                functional, powerful in performance, and beautiful in design.
              </p>
            </div>
          </Slide>

          <div className="row connect">
            <div className="bg-icon">
              <Button
                className="em-btn"
                type="link"
                isExternal
                href="https://www.linkedin.com/in/rizkinabilaufa/"
                target="_blank"
              >
                <img src={linkedin} alt="linkedin" />
              </Button>
            </div>
            <div className="bg-icon">
              <Button
                className="em-btn"
                type="link"
                isExternal
                href="https://github.com/rizkinabil"
                target="_blank"
              >
                <img src={github} alt="github" />
              </Button>
            </div>
            <div className="bg-icon">
              <Button
                className="em-btn"
                type="link"
                isExternal
                href="mailto:rizki.nbl123@gmail.com?Subject=Hello%20Rizki!"
                target="_blank"
              >
                <img src={email} alt="email" />
              </Button>
            </div>
            <div className="bg-icon">
              <Button
                className="em-btn"
                type="link"
                isExternal
                href="https://t.me/rizkinbil"
                target="_blank"
              >
                <img src={telegram} alt="telegram" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
