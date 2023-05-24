import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const url = 'https://restcountries.com/v3.1/all';

export const countryData = createAsyncThunk('country', async () => {
  const response = await fetch(url);
  const result = await response.json();

  const data = result.map((item) => ({
    name: item.name.common,
    capital: item.capital,
    continent: item.continents[0],
    flag: item.flags.png,
    population: item.population,
    map: item.maps.googleMaps,
    area: item.area,

  }));

  return data;
});

const initialState = {
  countryData: [],
  loading: false,
  error: null,
};

const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(countryData.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(countryData.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        countryData: action.payload,
      }))
      .addCase(countryData.rejected, (state) => ({
        ...state,
        loading: true,
      }));
  },
});

export default countrySlice.reducer;
