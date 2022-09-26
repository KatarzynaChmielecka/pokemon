import './App.css';

import { Route, Routes } from 'react-router-dom';

import Details from './pages/Details';
import Home from './pages/Home';
import Layout from './components/layout/Layout';
import Moves from './pages/Moves';
import Places from './pages/Places';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/details/:name" element={<Details />} />
          <Route path="/moves/:id" element={<Moves />} />
          <Route path="/places/:id" element={<Places />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
