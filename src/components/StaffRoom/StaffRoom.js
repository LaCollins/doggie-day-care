import React from 'react';
import PropTypes from 'prop-types';
import employeeShape from '../../helpers/propz/employeeShape';
import './StaffRoom.scss';
import Employee from '../Employee/Employee';

class StaffRoom extends React.Component {
  static propTypes = {
    employees: PropTypes.arrayOf(employeeShape.employeeShape),
  }

  render() {
    const myEmployees = this.props.employees;

    const employeeCards = myEmployees.map((employee) => <Employee key={employee.id} employee={employee} />);

    return (
      <div>
        <h3>Staff Room</h3>
        <div className="staffRoom row d-flex justify-content-center">
          {employeeCards}
        </div>
      </div>
    );
  }
}

export default StaffRoom;
