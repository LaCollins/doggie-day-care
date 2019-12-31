import './WalkForm.scss';
import React from 'react';
import PropTypes from 'prop-types';
import dogShape from '../../helpers/propz/dogShape';
import employeeShape from '../../helpers/propz/employeeShape';
import walkShape from '../../helpers/propz/walkShape';
import dogsData from '../../helpers/data/dogsData';
import employeesData from '../../helpers/data/employeesData';

class WalkForm extends React.Component {
  static propTypes = {
    addWalk: PropTypes.func,
    closeForm: PropTypes.func,
    dogs: PropTypes.arrayOf(dogShape.dogShape),
    employees: PropTypes.arrayOf(employeeShape.employeeShape),
    walkToEdit: walkShape.walkShape,
    editMode: PropTypes.bool,
    updateWalk: PropTypes.func,
    closeEditMode: PropTypes.func,
  }

  state = {
    dogId: '',
    employeeId: '',
    date: '',
    dogName: '',
    employeeName: '',
  }

  componentDidMount() {
    const { walkToEdit, editMode } = this.props;
    if (editMode) {
      this.setState({ dogId: walkToEdit.dogId, employeeId: walkToEdit.employeeId, date: walkToEdit.date })
      this.dogNameToEdit();
      this.employeeNameToEdit();
    }
  }

  componentDidUpdate(prevProps) {
    if ((prevProps.walkToEdit.id !== this.props.walkToEdit.id) && this.props.editMode) {
      this.setState({ dogId: this.props.walkToEdit.dogId, employeeId: this.props.walkToEdit.employeeId, date: 
      this.props.walkToEdit.date })
    };
  }

  updateWalkEvent = (e) => {
    e.preventDefault();
    const { updateWalk, walkToEdit, closeEditMode, closeForm } = this.props;
    const updatedWalk = {
      dogId: this.state.dogId,
      employeeId: this.state.employeeId,
      date: this.state.date,
    }
    updateWalk(walkToEdit.id, updatedWalk);
    closeEditMode();
    closeForm();
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

  dogNameToEdit = () => {
    const { walkToEdit } = this.props;
    dogsData.getDogById(walkToEdit.dogId)
      .then((dog) => {
        const dogName = dog.data.name;
        this.setState({ dogName });
      })
      .catch((error) => console.error(error));
  }

  employeeNameToEdit = () => {
    const { walkToEdit } = this.props;
    employeesData.getEmployeeById(walkToEdit.employeeId)
      .then((employee) => {
        const employeeFirstName = employee.data.firstName;
        const employeeLastName = employee.data.lastName;
        const employeeName = `${employeeFirstName} ${employeeLastName}`;
        this.setState({ employeeName });
      })
      .catch((error) => console.error(error));
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
    const { dogs, employees, editMode } = this.props;
    

    return (
      <div className='popup'>
        <div className='inner'>
        <form className='col-6 offset-3 walkForm'>
        <div className="form-group">
        <div className="col-auto my-1">
          <label className="mr-sm-2" htmlFor="dogSelect">Select Dog</label>
          <select className="custom-select mr-sm-2" id="dogSelect" onChange={this.dogChange}>
            {
              (editMode) ? (<option defaultValue={this.state.dogId}>{this.state.dogName}</option>) : (<option defaultValue={this.state.dogId}>Choose...</option>)
            }
            {dogs.map((dog) => <option key={dog.id} value={dog.id}>{dog.name}</option>)}
          </select>
        </div>
        </div>
        <div className="form-group">
          <label className="mr-sm-2" htmlFor="employeeSelect">Select Employee</label>
          <select className="custom-select mr-sm-2" id="employeeSelect" onChange={this.employeeChange}>
            {
              (editMode) ? (<option defaultValue={this.state.employeeId}>{this.state.employeeName}</option>) : (<option defaultValue>Choose...</option>)
            }
            {employees.map((employee) => <option key={employee.id} value={employee.id}>{employee.firstName} {employee.lastName}</option>)}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="date">Enter Date:</label>
          <input
            type="date"
            className="form-control"
            id="date"
            value={this.state.date}
            onChange={this.dateChange}
          />
        </div>
        </form>
          <div className="justify-content-around row d-flex">
            {
              (editMode) ? (<button className="btn btn-dark" onClick= {this.updateWalkEvent}>Update</button>) : (<button className="btn btn-dark" onClick= {this.saveWalkEvent}>Save</button>)
            }
          <button className="btn btn-dark" onClick={this.props.closeForm}>Close</button>
          </div>
        </div>
      </div>
    );
  }
}

export default WalkForm;
