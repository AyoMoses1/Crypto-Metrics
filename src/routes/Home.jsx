import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Coin from '../components/Coin';

function Home() {
  const state = useSelector((state) => state.cryptoReducer.list);
  return (
    <Container className="home-wrapper">
      <div className="banner">
        <h2>Covid Tracker</h2>
        <p>Over 200views</p>
      </div>
      <div className="grid-container justify-content-center">
        {state.map((coin) => (
          <div key={coin.country} className="grid-item">
            <Coin
              image={coin.countryInfo.flag}
              name={coin.country}
              cases={coin.cases}
            />
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Home;
