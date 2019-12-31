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
    walksWithData: [],
  }

  componentDidMount() {
    this.getDogs();
    this.getEmployees();
    this.getWalksWithData();
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


  getWalksWithData = () => {
    let walksWithData = [];
    walksData.getAllWalks()
    .then((walks) => {
      walksWithData = walks;
      walksWithData.forEach((walk) => { 
        dogsData.getDogById(walk.dogId)
          .then((dog) => {
            walk.dogName = dog.data.name;
            walksWithData.forEach((walk) => {
              employeesData.getEmployeeById(walk.employeeId)
              .then((employee) => {
                const employeeName = `${employee.data.firstName} ${employee.data.lastName}`;
                walk.employeeName = employeeName;
              })
            })
          })
      })
      setTimeout(() => this.setState({ walksWithData }), 500,)
    })
    .catch((error) => console.error(error));
  }

  addWalk = (newWalk) => {
    walksData.saveWalk(newWalk)
      .then(() => {
        this.getWalksWithData();
      })
      .catch((error) => console.error(error));
  }

  updateWalk = (walkId, updatedWalk) => {
    walksData.updateWalk(walkId, updatedWalk)
      .then(() => {
        this.getWalksWithData();
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
      <Walks walksWithData={this.state.walksWithData} addWalk={this.addWalk} dogs={this.state.dogs} employees={this.state.employees} updateWalk={this.updateWalk} />
      </div>
      </div>
    );
  }
}

export default Home;
