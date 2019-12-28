import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import 'firebase/auth';
import Auth from '../Auth/Auth';
import './NavBar.scss';

class NavBar extends React.Component {
  static propTypes = {
    authed: PropTypes.bool,
  }

  logMeOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  buttonSwap = () => {
    const { authed } = this.props;
    if (!authed) {
      return (<Auth />);
    } if (authed) {
      return (<div className="btn btn-secondary" onClick={this.logMeOut}>Log Out</div>);
    }
  }

  render() {
    return (
      <div className="NavBar">
        <nav className="navbar navbar-light bg-light">
          <div className="navbar-brand">Doggie Day Care</div>
          {this.buttonSwap()}
        </nav>
      </div>
    );
  }
}

export default NavBar;
