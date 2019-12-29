import React from 'react';
import './Home.scss';
import dogsData from '../../helpers/data/dogsData';
import DogPen from '../DogPen/DogPen';
import employeesData from '../../helpers/data/employeesData';
import StaffRoom from '../StaffRoom/StaffRoom';

class Home extends React.Component {
  state = {
    dogs: [],
    employees: [],
  }

  componentDidMount() {
    this.getDogs();
    this.getEmployees();
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

  render() {
    return (
      <div className="row d-flex justify-content-between">
      <DogPen dogs={this.state.dogs} />
      <StaffRoom employees={this.state.employees} />
      </div>
    );
  }
}

export default Home;
