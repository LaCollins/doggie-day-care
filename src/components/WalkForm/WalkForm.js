import './WalkForm.scss';
import React from 'react';
import PropTypes from 'prop-types';
import dogShape from '../../helpers/propz/dogShape';
import employeeShape from '../../helpers/propz/employeeShape';
// import walkShape from '../../helpers/propz/walkShape';

class WalkForm extends React.Component {
  static propTypes = {
    addWalk: PropTypes.func,
    closeForm: PropTypes.func,
    dogs: PropTypes.arrayOf(dogShape.dogShape),
    employees: PropTypes.arrayOf(employeeShape.employeeShape),
  }

  state = {
    dogId: '',
    employeeId: '',
    date: '',
  }

  saveWalkEvent = (e) => {
    e.preventDefault();
    if (this.state.dogId !== '' && this.state.employeeId !== '' && this.state.date !== '') {
      const { addWalk } = this.props;
      const newWalk = {
        dogId: this.state.dogId,
        employeeId: this.state.employeeId,
        date: this.state.date,
      };
      addWalk(newWalk);
      this.props.closeForm();
    }
  }

  dogChange = (e) => {
    e.preventDefault();
    this.setState({ dogId: e.target.value });
  }

  employeeChange = (e) => {
    e.preventDefault();
    this.setState({ employeeId: e.target.value });
  }

  dateChange = (e) => {
    e.preventDefault();
    this.setState({ date: e.target.value });
  }

  render() {
    const { dogs } = this.props;
    const { employees } = this.props;

    return (
      <div className='popup'>
        <div className='inner'>
        <form className='col-6 offset-3 walkForm'>
        <div className="form-group">
        <div className="col-auto my-1">
          <label className="mr-sm-2" htmlFor="dogSelect">Select Dog</label>
          <select className="custom-select mr-sm-2" id="dogSelect" onChange={this.dogChange}>
            <option defaultValue>Choose...</option>
            {dogs.map((dog) => <option key={dog.id} value={dog.id}>{dog.name}</option>)}
          </select>
        </div>
        </div>
        <div className="form-group">
          <label className="mr-sm-2" htmlFor="employeeSelect">Select Employee</label>
          <select className="custom-select mr-sm-2" id="employeeSelect" onChange={this.employeeChange}>
            <option defaultValue>Choose...</option>
            {employees.map((employee) => <option key={employee.id} value={employee.id}>{employee.firstName} {employee.lastName}</option>)}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="date">Enter Date:</label>
          <input
            type="date"
            className="form-control"
            id="date" required
            value={this.state.date}
            onChange={this.dateChange}
          />
        </div>
        </form>
          <div className="justify-content-around row d-flex">
            <button className="btn btn-dark" onClick= {this.saveWalkEvent}>Save</button>
          <button className="btn btn-dark" onClick={this.props.closeForm}>Close</button>
          </div>
        </div>
      </div>
    );
  }
}

export default WalkForm;
