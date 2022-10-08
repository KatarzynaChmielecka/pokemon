import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { PokemonContextProvider } from './context/PokemonContext';

// import { StrictMode } from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <StrictMode>
  <BrowserRouter>
    <PokemonContextProvider>
      <App />
    </PokemonContextProvider>
  </BrowserRouter>,
  // </StrictMode>,
);
