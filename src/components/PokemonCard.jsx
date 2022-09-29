import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PokemonCard = ({ image, alt, name, color1, color2 }) => {
  return (
    <div
      style={{
        width: '150px',
        height: '150px',
        background: `linear-gradient(90deg, ${color2} 50%, ${color1} 0%)`,
      }}
    >
      <Link to={`/details/${name}`}>
        <img src={image} alt={alt} />
        <h1>{name}</h1>
      </Link>
    </div>
  );
};

export default PokemonCard;
PokemonCard.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string,
  name: PropTypes.string,
  color1: PropTypes.string,
  color2: PropTypes.string,
};
