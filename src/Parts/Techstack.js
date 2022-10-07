import React from 'react';

import iconTitle from 'Assets/Images/Icons/techstack-title-logo.svg';

export default function Techstack() {
  return (
    <div className="container">
      <div className="row">
        <h1>Techstack</h1>
        <img src={iconTitle} alt="logo" className="mb-5" />
      </div>
      <div className="row justify-content-between">
        <div className="column-md-6">
          <h3>Front-end</h3>
          <div className="row">
            <div className="col-6 list-techstack">
              <ul>
                <div className="techstack-wrapper">
                  <img src={require('Assets/Images/Icons/techstack-html-logo.png')} alt="" />
                  <li>HTML</li>
                </div>
                <div className="techstack-wrapper">
                  <img src={require('Assets/Images/Icons/techstack-css-logo.png')} alt="" />
                  <li>CSS</li>
                </div>
                <div className="techstack-wrapper">
                  <img src={require('Assets/Images/Icons/techstack-scss-logo.png')} alt="" />
                  <li>SASS</li>
                </div>
              </ul>
            </div>
            <div className="col-6 list-techstack">
              <ul>
                <div className="techstack-wrapper">
                  <img src={require('Assets/Images/Icons/techstack-js-logo.png')} alt="" />
                  <li>JavaScript</li>
                </div>
                <div className="techstack-wrapper">
                  <img src={require('Assets/Images/Icons/techstack-vue-logo.png')} alt="" />
                  <li>
                    Vue<span className="font-weight-bold">Js</span>
                  </li>
                </div>
                <div className="techstack-wrapper">
                  <img src={require('Assets/Images/Icons/techstack-react-logo.png')} alt="" />
                  <li>
                    React<span className="font-weight-bold">Js</span>
                  </li>
                </div>
              </ul>
            </div>
          </div>
          <h3>Back-end</h3>
          <div className="row">
            <div className="col-6 list-techstack">
              <ul>
                <div className="techstack-wrapper">
                  <img src={require('Assets/Images/Icons/techstack-nodejs-logo.png')} alt="" />
                  <li>
                    Node<span className="font-weight-bold">Js</span>
                  </li>
                </div>
                <div className="techstack-wrapper">
                  <img src={require('Assets/Images/Icons/techstack-mysql-logo.png')} alt="" />
                  <li>MySQL</li>
                </div>
                <div className="techstack-wrapper">
                  <img src={require('Assets/Images/Icons/techstack-graphql-logo.png')} alt="" />
                  <li>GraphQL</li>
                </div>
              </ul>
            </div>
            <div className="col-6 list-techstack">
              <ul>
                <div className="techstack-wrapper">
                  <img src={require('Assets/Images/Icons/techstack-mongo-logo.png')} alt="" />
                  <li>MongoDB</li>
                </div>
                <div className="techstack-wrapper">
                  <img src={require('Assets/Images/Icons/techstack-express-logo.png')} alt="" />
                  <li>Express<span className='font-weight-bold'>Js</span></li>
                </div>
              </ul>
            </div>
          </div>
        </div>
        <div className="column-md-6">
          <div
            className="threejs"
            style={{
              backgroundColor: 'grey',
              padding: '200px',
              borderRadius: '50%',
            }}
          >
            threejs
          </div>
        </div>
      </div>
    </div>
  );
}
