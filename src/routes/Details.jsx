import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchCryptos } from '../redux/cryptos/cryptoSlice';

function Details() {
  const dispatch = useDispatch();

  return (
    <div>
      <button type="submit" onClick={() => dispatch(fetchCryptos())}>Submit</button>
    </div>
  );
}

export default Details;
