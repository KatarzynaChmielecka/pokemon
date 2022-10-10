import PropTypes from 'prop-types';

import classes from './Moves.module.css';

const Moves = ({ name, accuracy, pp, power, type, color }) => {
  return (
    <div className={classes['moves-card-wrapper']}>
      <div className={classes['moves-card-wrapper__left']}>
        <p className={classes['moves-card-wrapper__move-name']}>{name}</p>
        <span
          style={{
            background: color,
          }}
          className={classes['moves-card-wrapper__move-type']}
        >
          {type}
        </span>
      </div>
      <div className={classes['moves-card-wrapper__right']}>
        <span>{pp == null ? 'nd' : pp + ' pp'} </span>
        <span>{power == null ? 'nd' : power + ' power'}</span>
        <span>{accuracy == null ? 'nd ' : accuracy + ' accuracy'}</span>
      </div>
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
  color: PropTypes.string,
};
