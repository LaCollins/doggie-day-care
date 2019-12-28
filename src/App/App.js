import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from 'firebase/app';
import NavBar from '../components/NavBar/NavBar';
import firebaseConnection from '../helpers/data/connection';
import Home from '../components/Home/Home';

firebaseConnection();

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { authed } = this.state;

    return (
    <div className="App">
      <NavBar authed={authed} />
      <div className="authedContainer">
        {
          (authed) ? (<Home />) : (<img className="doggo m-2" src="https://nevadahumanesociety.org/wp-content/uploads/2018/08/NHS-Slider-03-1024x731.jpg" alt="cute doggo" />)
        }
      </div>
    </div>
    );
  }
}

export default App;
