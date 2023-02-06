import React from 'react';
import propTypes from 'prop-types';

import './index.scss';

export default function MessageElement(props) {
  if (!props.isShowedButton) {
    return (
      <div class="container">
        <h1 className="text-message">
          You already know about <span className="text-primary">me.</span> Let's <br /> make something{' '}
          <span className="text-primary">special.</span>
        </h1>
      </div>
    );
  }

  return (
    <>
      <div class="container">
        <h1 className="text-message">
          You already know about <span className="text-primary">me.</span> Let's <br /> make something{' '}
          <span className="text-primary">special.</span>
        </h1>
        <div className="btn-style-wrapper">
          <div className="btn-style">
            <button type="link">
              <a href="https://t.me/rizkinbil" target="_blank" rel="noreferrer">
                SHOOT MESS<span>AGE</span>
              </a>
            </button>
            <div className="bg"></div>
          </div>
        </div>
      </div>
    </>
  );
}

MessageElement.propTypes = {
  isShowedButton: propTypes.bool,
};
