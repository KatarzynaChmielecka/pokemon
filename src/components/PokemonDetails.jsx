import PropTypes from 'prop-types';

const PokemonDetails = ({ name, name2, image }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h1>{name2}</h1>
      <img src={image} alt="" />
    </div>
  );
};

export default PokemonDetails;

PokemonDetails.propTypes = {
  image: PropTypes.string,
  //   alt: PropTypes.string,
  name: PropTypes.string,
  name2: PropTypes.string,
};
