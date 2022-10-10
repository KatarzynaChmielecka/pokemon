import PropTypes from 'prop-types';

import classes from './PokemonDetailsCard.module.css';

const PokemonDetailsCard = ({
  text,
  name,
  types,
  src,
  alt,
  color1,
  color2,
}) => {
  return (
    <div className={classes['pokemon-details-card']}>
      <div className={classes['pokemon-details-card__header']}>
        <p className={classes['pokemon-details-card__name']}> {name}</p>
        <span style={{ background: color1 }}>{types[0]}</span>
        <span style={{ background: color2 }}>{types[1]}</span>
      </div>
      <div className={classes['pokemon-details-card__content']}>
        <img src={src} alt={alt} />
        <p>{text}</p>
      </div>
    </div>
  );
};

PokemonDetailsCard.propTypes = {
  text: PropTypes.string,
  name: PropTypes.string,
  types: PropTypes.array,
  src: PropTypes.string,
  alt: PropTypes.string,
  color1: PropTypes.string,
  color2: PropTypes.string,
};

export default PokemonDetailsCard;
