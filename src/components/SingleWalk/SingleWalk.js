import React from 'react';
import walkShape from '../../helpers/propz/walkShape';
import dogsData from '../../helpers/data/dogsData';
import employeeData from '../../helpers/data/employeesData';
import PropTypes from 'prop-types';

class SingleWalk extends React.Component {
  static propTypes = {
    walk: walkShape.walkShape,
    setEditMode: PropTypes.func,
    setWalkToEdit: PropTypes.func,
  }

  state = {
    dogName: '',
    employeeName: '',
  }

  setEditMode = (e) => {
    const {setEditMode, setWalkToEdit, walk } = this.props;
    e.preventDefault();
    setEditMode(true);
    setWalkToEdit(walk);
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
      <div className="card-footer d-flex justify-content-around">
      <button className="btn btn-secondary" onClick={() => {}}>Delete</button>
      <button className="btn btn-light" onClick={this.setEditMode}>Edit</button>
    </div>
    </div>
    );
  }
}

export default SingleWalk;
