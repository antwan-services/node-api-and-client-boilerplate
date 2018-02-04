import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import { NavLink, AuthNavLink } from '../../../Lib/Common/Views';
import Button from '../../Button';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <Navbar inverse>
          <Navbar.Header>
            <Link to="/" className="navbar-brand">{process.env.REACT_APP_SITE_NAME}</Link>
            <Navbar.Toggle id="js-navbar-toggle-btn" />
          </Navbar.Header>
          <Navbar.Collapse>
            <ul className="navbar-nav nav navbar-right">
              <NavLink title="About" to="/about" path={this.props.match.path} />
              <NavLink title="Sign In" to="/sign-in" path={this.props.match.path} isSignedOut />
              <AuthNavLink title="Admin" to="/admin/dashboard" />
              <Button.SignOut />
            </ul>
          </Navbar.Collapse>
        </Navbar>
      </header>
    );
  }
};

export default withRouter(Header);
