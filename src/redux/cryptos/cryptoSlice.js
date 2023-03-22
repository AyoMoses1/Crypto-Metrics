import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  list: [],
  details: {},
  isLoading: false,
};

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const fetchCryptos = createAsyncThunk('books/fetchCryptos', async () => {
  const response = await axios.get(`${BASE_URL}`);
  const res = response.data;
  return res;
});

export const fetchCountryDetails = createAsyncThunk('books/fetchCountryDetails', async (state) => {
  const response = await axios.get(`${BASE_URL}/${state}`);
  const res = response.data;
  return res;
});

const cryptoSlice = createSlice({
  name: 'cryptos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCryptos.fulfilled, (state, action) => {
      const newState = { ...state };
      newState.list = action.payload.slice(0, 50);
      return newState;
    });
    builder.addCase(fetchCountryDetails.fulfilled, (state, action) => {
      const newState = { ...state };
      newState.details = action.payload;
      return newState;
    });
  },
});

export default cryptoSlice.reducer;
