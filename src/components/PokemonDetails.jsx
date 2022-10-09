import PropTypes from 'prop-types';

const PokemonDetails = ({ text, name, types, src, alt }) => {
  return (
    <div>
      <div>
        {name}
        <span>{types[0]}</span>
        <span>{types[1]}</span>
      </div>
      <div>
        <img src={src} alt={alt} />
        <p>{text}</p>
      </div>
    </div>
  );
};

PokemonDetails.propTypes = {
  text: PropTypes.string,
  name: PropTypes.string,
  types: PropTypes.array,
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default PokemonDetails;
