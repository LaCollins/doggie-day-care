import React from 'react';
import walkShape from '../../helpers/propz/walkShape';
import dogsData from '../../helpers/data/dogsData';
import employeeData from '../../helpers/data/employeesData';

class SingleWalk extends React.Component {
  static propTypes = {
    walk: walkShape.walkShape,
  }

  state = {
    dogName: '',
    employeeName: '',
  }

  componentDidMount() {
    this.getDog();
    this.getEmployee();
  }

  getDog = () => {
    const { walk } = this.props;
    dogsData.getDogById(walk.dogId)
      .then((dog) => {
        const dogName = dog.data.name;
        this.setState({ dogName });
      })
      .catch((error) => console.error(error));
  }

  getEmployee = () => {
    const { walk } = this.props;
    employeeData.getEmployeeById(walk.employeeId)
      .then((employee) => {
        const employeeFirstName = employee.data.firstName;
        const employeeLastName = employee.data.lastName;
        const employeeName = `${employeeFirstName} ${employeeLastName}`;
        this.setState({ employeeName });
      })
      .catch((error) => console.error(error));
  }

  render() {
    const { walk } = this.props;

    return (
      <div className="card col-3 m-3">
      <div className="card-body">
        <h5 className="card-title">{this.state.dogName}</h5>
        <p className="card-text">{this.state.employeeName}</p>
        <p className="card-text">{walk.date}</p>
      </div>
    </div>
    );
  }
}

export default SingleWalk;
