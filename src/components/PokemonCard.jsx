import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PokemonCard = ({ image, alt, name }) => {
  return (
    <Link to={`/details/${name}`}>
      <img src={image} alt={alt} />
      <h1>{name}</h1>
    </Link>
  );
};

export default PokemonCard;
PokemonCard.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string,
  name: PropTypes.string,
  index: PropTypes.string,
};
