import PropTypes from 'prop-types';

const walksWithDataShape = PropTypes.shape({
  id: PropTypes.string,
  dogId: PropTypes.string,
  employeeId: PropTypes.string,
  date: PropTypes.string,
  dogName: PropTypes.string,
  employeeName: PropTypes.string,
});

export default { walksWithDataShape };
