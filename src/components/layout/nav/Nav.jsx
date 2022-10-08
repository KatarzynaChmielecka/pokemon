import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search';
import SortIcon from '@mui/icons-material/Sort';
import { useContext, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import SearchBar from './SearchBar';
import classes from './Nav.module.css';
import { PokemonContext } from '../../../context/PokemonContext';

const Nav = () => {
  const { allPokemons, setAllPokemons } = useContext(PokemonContext);
  const [toggle, setToggle] = useState(false);
  const [searchToggle, setSearchToggle] = useState(false);
  const location = useLocation();
  const params = useParams();
  const navigate = useNavigate();

  const handleSort = () => {
    const newToggle = !toggle;
    setToggle(newToggle);
    const sortedData = [...allPokemons].sort((a, b) =>
      newToggle && a.name > b.name ? 1 : -1,
    );

    setAllPokemons(sortedData);
  };

  const handleSearchToggle = () => setSearchToggle(!searchToggle);
  return (
    <nav className={classes.navigation}>
      {location.pathname === `/details/${params.name}` ? (
        <>
          <ArrowBackIcon onClick={() => navigate(-1)} />
          <h1 style={{ color: 'red' }}>{params.name} </h1>
        </>
      ) : (
        <>
          <h1>Pokédex</h1>
          <div style={{ display: 'flex' }}>
            {searchToggle && <SearchBar />}
            <SearchIcon
              sx={{ margin: '0 25px 0 0' }}
              onClick={handleSearchToggle}
            />
            {toggle ? (
              <SortIcon onClick={handleSort} />
            ) : (
              <SortIcon sx={{ rotate: '180deg' }} onClick={handleSort} />
            )}
          </div>
        </>
      )}
    </nav>
  );
};

export default Nav;
