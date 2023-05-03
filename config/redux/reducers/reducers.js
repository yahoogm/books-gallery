import { combineReducers } from '@reduxjs/toolkit';
import searchReducer from '../books/bookSlice.reducer';
import userReducer from '../user/userSlice.reducer';

export const Reducers = combineReducers({
  book: searchReducer,
  user: userReducer,
});
