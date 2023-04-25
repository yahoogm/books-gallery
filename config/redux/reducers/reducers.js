import { combineReducers } from '@reduxjs/toolkit';
import searchReducer from '../books/bookSlice.reducer';

export const Reducers = combineReducers({
  book: searchReducer,
});
