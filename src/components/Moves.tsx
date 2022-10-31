import classes from './Moves.module.css';
import { MovesInterface } from '../interfaces/interfaces';

const Moves = ({ name, accuracy, pp, power, type, color }: MovesInterface) => {
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
