import { createSlice } from '@reduxjs/toolkit';
import { retrieveSearch } from './searchThunk.reducer';

const initialState = {
  search: [],

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
      .addCase(retrieveSearch.pending, (state, action) => {
        return {
          ...state,
          retrieveSearchLoading: true,
          retrieveSearchError: undefined,
          type: action.type,
        };
      })
      .addCase(retrieveSearch.fulfilled, (state, action) => {
        return {
          ...state,
          search: action.payload,
          retrieveSearchLoading: false,
          retrieveSearchError: undefined,
          type: action.type,
        };
      })
      .addCase(retrieveSearch.rejected, (state, action) => {
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
