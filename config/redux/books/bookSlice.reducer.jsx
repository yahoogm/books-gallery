import { createSlice } from '@reduxjs/toolkit';
import { retrieveSearchBooks } from './bookThunk.reducer';

const initialState = {
  books: [],

  retrieveSearchLoading: false,
  retrieveSearchError: undefined,

  type: '',
};

export const searchSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //#region retrieve search
      .addCase(retrieveSearchBooks.pending, (state, action) => {
        return {
          ...state,
          retrieveSearchLoading: true,
          retrieveSearchError: undefined,
          type: action.type,
        };
      })
      .addCase(retrieveSearchBooks.fulfilled, (state, action) => {
        return {
          ...state,
          books: action.payload,
          retrieveSearchLoading: false,
          retrieveSearchError: undefined,
          type: action.type,
        };
      })
      .addCase(retrieveSearchBooks.rejected, (state, action) => {
        return {
          ...state,
          retrieveSearchLoading: false,
          retrieveSearchError: action.payload,
          type: action.type,
        };
      });
    //#endregion retrieve search
  },
});

const { reducer: searchReducer } = searchSlice;
export default searchReducer;
