import React from 'react';
import PropTypes from 'prop-types';
import walkShape from '../../helpers/propz/walkShape';
import SingleWalk from '../SingleWalk/SingleWalk';

class Walks extends React.Component {
  static propTypes = {
    walks: PropTypes.arrayOf(walkShape.walkShape),
  }

  render() {
    const myWalks = this.props.walks;

    const walkCards = myWalks.map((walk) => <SingleWalk key={walk.id} walk={walk} />);

    return (
      <div>
        <h3>Walks</h3>
        <div className="dogPen row d-flex justify-content-center">
          {walkCards}
        </div>
      </div>
    );
  }
}

export default Walks;
