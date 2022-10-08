import ScrollToTop from 'react-scroll-to-top';
import { useContext } from 'react';

import AllPokemons from '../components/AllPokemons';
import classes from './HomePage.module.css';
import { PokemonContext } from '../context/PokemonContext';

const HomePage = () => {
  const { inputText, isLoading } = useContext(PokemonContext);

  return (
    <div className={classes['home-page-wrapper']}>
      {isLoading ? (
        <h1>Gathering pokemons...</h1>
      ) : (
        <AllPokemons searchInput={inputText} />
      )}
      <ScrollToTop smooth color="#fff" style={{ background: '#000' }} />
    </div>
  );
};

export default HomePage;
