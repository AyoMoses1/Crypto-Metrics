import { configureStore } from '@reduxjs/toolkit';
import cryptoReducer from './cryptos/cryptoSlice';

const store = configureStore({
  reducer: {
    cryptoReducer,
  },
});

export default store;
