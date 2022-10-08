import './App.css';

import { Route, Routes } from 'react-router-dom';

import DetailsPage from './pages/DetailsPage';
import HomePage from './pages/HomePage';
import Layout from './components/layout/Layout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/details/:name" element={<DetailsPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
