import React from 'react';
// import PropTypes from 'prop-types';
import dogShape from '../../helpers/propz/dogShape';

class Dog extends React.Component {
  static propTypes = {
    dog: dogShape.dogShape,
  }

  render() {
    const { dog } = this.props;
    return (
      <div className="card col-3 m-3">
        <img src={dog.imageUrl} className="card-img-top" alt={dog.name}/>
        <div className="card-body">
          <h5 className="card-title">{dog.name}</h5>
          <p className="card-text">{dog.age}</p>
          <p className="card-text">{dog.description}</p>
        </div>
      </div>
    );
  }
}

export default Dog;
