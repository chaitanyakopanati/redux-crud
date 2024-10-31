import { configureStore } from '@reduxjs/toolkit';
import CountrySliceReducer from '../redux/slice/countrySlice';
import StateSliceReducer  from '../../src/redux/slice/stateSlice';
import CitySliceReducer from '../../src/redux/slice/citySlice';
export const store = configureStore({
  reducer: {
    country:CountrySliceReducer,
    state:StateSliceReducer,
    city:CitySliceReducer,
  },
});
