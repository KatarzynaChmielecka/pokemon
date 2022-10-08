import ScrollToTop from 'react-scroll-to-top';
import { useContext } from 'react';

import AllPokemons from '../components/AllPokemons';
import { PokemonContext } from '../context/PokemonContext';

const HomePage = () => {
  const { inputText, isLoading } = useContext(PokemonContext);

  return (
    <div
    // style={{
    //   display: 'flex',
    //   flexWrap: 'wrap',

    //   width: '100%',
    //   height: '100vh',

    // }}
    >
      {isLoading ? (
        <h1>Gathering pokemons...</h1>
      ) : (
        <AllPokemons searchInput={inputText} />
      )}
      <ScrollToTop smooth color="white" style={{ background: 'black' }} />
    </div>
  );
};

export default HomePage;
