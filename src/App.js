import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { fetchCryptos } from './redux/cryptos/cryptoSlice';
import Navbar from './components/Navbar';
import Details from './routes/Details';
import Home from './routes/Home';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCryptos());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
