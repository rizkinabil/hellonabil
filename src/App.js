import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LandingPage from 'Pages/LandingPage';
import DetailProject from 'Pages/DetailProject';

import 'Assets/Scss/style.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/project/:id" component={DetailProject} />
      </Router>
    </div>
  );
}

export default App;
