import PropTypes from 'prop-types';

const Stats = ({ name, base_stat }) => {
  return (
    <section>
      <h6>{name}</h6>
      <div
        style={{
          width: '150px',
          height: '5px',
          background: 'grey',
          position: 'relative',
        }}
      >
        <div
          style={{
            width: `${base_stat}px`,
            height: '100%',
            background: 'blue',
            position: 'absolute',
            top: '0',
            left: '0',
          }}
        />
      </div>
      <h6>{base_stat}</h6>
    </section>
  );
};

export default Stats;

Stats.propTypes = {
  base_stat: PropTypes.string,
  name: PropTypes.string,
};
