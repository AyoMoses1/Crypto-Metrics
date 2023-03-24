import { configureStore } from '@reduxjs/toolkit';
import cryptoReducer, { fetchCryptos } from '../../../redux/cryptos/cryptoSlice';

describe('CoinsSlice', () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        cryptoReducer,
      },
    });
  });

  it('should filter the coin', () => {
    store.dispatch(fetchCryptos());
    expect(store.getState().cryptoReducer.list.length).toEqual(0);
  });
});
