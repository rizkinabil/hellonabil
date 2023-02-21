import React from 'react';

import Button from 'Elements/Button';
import BrandIcon from 'Parts/IconText';

export default function Header(props) {
  const getNavLinkClass = (path) => {
    return props.location.pathname === path ? ' active' : '';
  };

  if (props.isCentered)
    return (
      <header className="spacing-sm">
        <div className="header-wrap container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <Button className="brand-text-icon mx-auto" href="" type="link">
              Rizki
              <span className="text-gray-900">nabil.</span>
            </Button>
          </nav>
        </div>
      </header>
    );
  return (
    <header className="spacing-sm">
      <div className="header-wrap container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <BrandIcon />
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto" style={{ marginRight: '27px' }}>
              <li className={`nav-item${getNavLinkClass('/')}`}>
                <Button className="nav-link" type="link" href="/">
                  Home
                </Button>
              </li>
              <li className={`nav-item${getNavLinkClass('/About')}`}>
                <Button className="nav-link" type="link" href="/About">
                  About
                </Button>
              </li>
              <li className={`nav-item${getNavLinkClass('/Projects')}`}>
                <Button className="nav-link" type="link" href="/Projects">
                  Projects
                </Button>
              </li>
            </ul>

            <Button
              type="link"
              href="https://t.me/rizkinbil"
              isPrimary
              hasShadow
              isExternal
              target="_blank"
              className="btn px-3 btn-sm px-3 rounded"
            >
              Contact Me
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
