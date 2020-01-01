import React from 'react';
import walksWithDataShape from '../../helpers/propz/walksWithDataShape';
import PropTypes from 'prop-types';

class SingleWalk extends React.Component {
  static propTypes = {
    walksWithData: walksWithDataShape.walksWithDataShape,
    setEditMode: PropTypes.func,
    setWalkToEdit: PropTypes.func,
    deleteWalk: PropTypes.func,
  }

  setEditMode = (e) => {
    const {setEditMode, setWalkToEdit, walk } = this.props;
    e.preventDefault();
    setEditMode(true);
    setWalkToEdit(walk);
  }

  deleteWalkEvent = (e) => {
    e.preventDefault();
    const { deleteWalk, walk } = this.props;
    deleteWalk(walk.id);
  }


  render() {
    const { walk } = this.props;

    return (
      <div className="card col-3 m-3">
      <div className="card-body">
        <h5 className="card-title">{walk.dogName}</h5>
        <p className="card-text">{walk.employeeName}</p>
        <p className="card-text">{walk.date}</p>
      </div>
      <div className="card-footer d-flex justify-content-around">
      <button className="btn btn-secondary" onClick={this.deleteWalkEvent}>Delete</button>
      <button className="btn btn-light" onClick={this.setEditMode}>Edit</button>
    </div>
    </div>
    );
  }
}

export default SingleWalk;
