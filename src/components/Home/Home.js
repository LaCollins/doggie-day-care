import React from 'react';
import './Home.scss';
import dogsData from '../../helpers/data/dogsData';
import DogPen from '../DogPen/DogPen';
import employeesData from '../../helpers/data/employeesData';
import StaffRoom from '../StaffRoom/StaffRoom';
import Walks from '../Walks/Walks';
import walksData from '../../helpers/data/walksData';

class Home extends React.Component {
  state = {
    dogs: [],
    employees: [],
    walks: [],
  }

  componentDidMount() {
    this.getDogs();
    this.getEmployees();
    this.getWalks();
  }

  getEmployees = () => {
    employeesData.getAllEmployees()
      .then((employees) => {
        this.setState({ employees });
      })
      .catch((error) => console.error(error));
  }

  getDogs = () => {
    dogsData.getAllDogs()
      .then((dogs) => {
        this.setState({ dogs });
      })
      .catch((error) => console.error(error));
  }

  getWalks = () => {
    walksData.getAllWalks()
      .then((walks) => {
        this.setState({ walks });
      })
      .catch((error) => console.error(error));
  }

  addWalk = (newWalk) => {
    walksData.saveWalk(newWalk)
      .then(() => {
        this.getWalks();
      })
      .catch((error) => console.error(error));
  }

  updateWalk = (walkId, updatedWalk) => {
    walksData.updateWalk(walkId, updatedWalk)
      .then(() => {
        this.getWalks();
      })
      .catch((error) => console.error(error));
  }


  render() {
    return (
      <div>
      <div className="row d-flex justify-content-between">
      <DogPen dogs={this.state.dogs} />
      <StaffRoom employees={this.state.employees} />
      </div>
      <div className="walksContainer d-flex justify-content-center">
      <Walks walks={this.state.walks} addWalk={this.addWalk} dogs={this.state.dogs} employees={this.state.employees} updateWalk={this.updateWalk} />
      </div>
      </div>
    );
  }
}

export default Home;
