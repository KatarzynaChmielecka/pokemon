import PropTypes from 'prop-types';

const PokemonDetails = ({ name, image, alt }) => {
  return (
    <div>
      <h1>{name}</h1>
      <img src={image} alt={alt} />
    </div>
  );
};

export default PokemonDetails;

PokemonDetails.propTypes = {
  image: PropTypes.string,
  name: PropTypes.array,
  alt: PropTypes.string,
};
