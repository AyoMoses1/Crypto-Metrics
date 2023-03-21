import React from 'react';
import { useSelector } from 'react-redux';

function Home() {
  const state = useSelector((state) => state.cryptoReducer.list);
  return (
    <>
      {state.map((coin) => (
        <div key={coin.id}>
          <div>{coin.name}</div>
          <div className="image">
            <img src={coin.image} alt={coin.id} />
          </div>
        </div>
      ))}
    </>
  );
}

export default Home;
