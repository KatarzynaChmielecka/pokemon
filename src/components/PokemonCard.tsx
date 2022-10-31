import { Link } from 'react-router-dom';

import classes from './PokemonCard.module.css';
import { PokemonCardInterface } from '../interfaces/interfaces';

const PokemonCard = ({
  image,
  alt,
  name,
  color1,
  color2,
}: PokemonCardInterface) => {
  return (
    <Link to={`/details/${name}`}>
      <div
        style={{
          background: `linear-gradient(90deg, ${color2} 50%, ${color1} 0%)`,
        }}
        className={classes['card-wrapper']}
      >
        <img src={image} alt={alt} loading="lazy" />
        <p className={classes['card-wrapper__name']}>
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </p>
      </div>
    </Link>
  );
};

export default PokemonCard;
