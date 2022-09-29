import PropTypes from 'prop-types';

const PokemonDetails = ({ name, image }) => {
  return (
    <div>
      <h1>{name}</h1>
      <img src={image} alt="" />
    </div>
  );
};

export default PokemonDetails;

PokemonDetails.propTypes = {
  image: PropTypes.string,
  name: PropTypes.array,
  color: PropTypes.string,
};
