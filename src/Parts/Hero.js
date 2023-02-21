import React from 'react';

import Banner from 'Assets/Images/banner.svg';
import btn_slide from 'Assets/Images/btn_slide.svg';

import { Slide, Fade } from 'react-awesome-reveal';

export default function Hero(props) {
  function showProject() {
    window.scrollTo({
      top: props.refProject.current.offsetTop - 90,
      behavior: 'smooth',
    });
  }

  return (
    <div className="hero spacing-sm">
      <section className="container">
        <div className="row align-item-center">
          <Slide left>
            <div className="col-auto content" style={{ width: 570 }}>
              <h1 className="font-weight-bold line-height-1 mb-3">
                Hi There!
                <br />
                I'm Rizki nabil
              </h1>
              <p
                className="mb-4 font-weight-light text-gray-600 w-75"
                style={{
                  lineHeight: '170%',
                  fontSize: '24px',
                }}
              >
                I’m a Front end developer, Design and Build Interfaces.
              </p>

              <div className="btn-animate-wrapper">
                <div className="btn-animate">
                  <button onClick={showProject}>
                    My Proje<span>cts</span>
                  </button>
                  <div className="bg"></div>
                </div>
              </div>
            </div>
          </Slide>

          <div className="col-6 pl-5">
            <Fade delay={400}>
              <div style={{ width: 570, height: 540 }}>
                <img
                  src={Banner}
                  alt="Banner"
                  className="img-fluid position-absolute"
                  style={{ top: 0, right: 0, width: '80%' }}
                />
                <img
                  src={btn_slide}
                  alt="click button"
                  className="img-fluid position-absolute"
                  style={{ top: 400, right: 250, width: '45%' }}
                />
              </div>
            </Fade>
          </div>
        </div>
      </section>
    </div>
  );
}
