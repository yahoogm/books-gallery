import { combineReducers } from '@reduxjs/toolkit';
import searchReducer from '../search/searchSlice.reducer';

export const Reducers = combineReducers({
  search: searchReducer,
});
