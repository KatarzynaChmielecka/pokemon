import classes from './PokemonDetailsCard.module.css';
import { PokemonDetailsCardInterface } from '../interfaces/interfaces';

const PokemonDetailsCard = ({
  text,
  name,
  types,
  src,
  alt,
  color1,
  color2,
}: PokemonDetailsCardInterface) => {
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

export default PokemonDetailsCard;
