import React from 'react';
import PropTypes from 'prop-types';
import walkShape from '../../helpers/propz/walkShape';
import SingleWalk from '../SingleWalk/SingleWalk';
import WalkForm from '../WalkForm/WalkForm';
import dogShape from '../../helpers/propz/dogShape';
import employeeShape from '../../helpers/propz/employeeShape';

class Walks extends React.Component {
  static propTypes = {
    walks: PropTypes.arrayOf(walkShape.walkShape),
    addWalk: PropTypes.func,
    dogs: PropTypes.arrayOf(dogShape.dogShape),
    employees: PropTypes.arrayOf(employeeShape.employeeShape),
  }

  state = {
    showWalkForm: false,
  }

  setShowWalkForm = (e) => {
    e.preventDefault();
    this.setState({ showWalkForm: true });
  }

  closeForm = () => {
    this.setState({ showWalkForm: false });
  }

  render() {
    const myWalks = this.props.walks;

    const walkCards = myWalks.map((walk) => <SingleWalk key={walk.id} walk={walk} />);

    return (
      <div>
        <h3>Walks</h3>
        <button className="btn btn-light" onClick={this.setShowWalkForm}>Add Walk</button>
        { this.state.showWalkForm && <WalkForm addWalk={this.props.addWalk} closeForm={this.closeForm} dogs={this.props.dogs} employees={this.props.employees} />}
        <div className="dogPen row d-flex justify-content-center">
          {walkCards}
        </div>
      </div>
    );
  }
}

export default Walks;
