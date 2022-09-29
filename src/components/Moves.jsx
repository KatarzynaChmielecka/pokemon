import PropTypes from 'prop-types';

const Moves = ({ name, accuracy, pp, power, type }) => {
  return (
    <div key={name}>
      <li>
        {name} {accuracy == null ? 'nd ' : accuracy}
        {pp} {power}
      </li>
      <h1>{type}</h1>
    </div>
  );
};

export default Moves;

Moves.propTypes = {
  name: PropTypes.string,
  accuracy: PropTypes.number,
  pp: PropTypes.number,
  power: PropTypes.number,
  type: PropTypes.string,
};
