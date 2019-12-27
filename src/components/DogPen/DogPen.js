import React from 'react';
import PropTypes from 'prop-types';
import dogShape from '../../helpers/propz/dogShape';
import Dog from '../Dog/Dog';


class DogPen extends React.Component {
  static propTypes = {
    dogs: PropTypes.arrayOf(dogShape.dogShape),
  }

  render() {
    const myDogs = this.props.dogs;

    const dogCards = myDogs.map((dog) => <Dog key={dog.id} dog={dog} />);

    return (
      <div>
        <h3>Dog Pen</h3>
        <div className="dogPen row d-flex justify-content-center">
          {dogCards}
        </div>
      </div>
    );
  }
}

export default DogPen;
