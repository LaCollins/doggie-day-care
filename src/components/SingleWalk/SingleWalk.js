import React from 'react';
import walkShape from '../../helpers/propz/walkShape';

class SingleWalk extends React.Component {
  static propTypes = {
    walk: walkShape.walkShape,
  }

  render() {
    const { walk } = this.props;
    return (
      <div className="card col-3 m-3">
      <div className="card-body">
        <h5 className="card-title">{walk.dogId}</h5>
        <p className="card-text">{walk.employeeId}</p>
        <p className="card-text">{walk.date}</p>
      </div>
    </div>
    );
  }
}

export default SingleWalk;
