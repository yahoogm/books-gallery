import { createSlice } from '@reduxjs/toolkit';
import { retrieveReviewBook, retrieveSearchBooks } from './bookThunk.reducer';

const initialState = {
  books: [],
  readBook: [],
  reviewBook: [],
  detailBook: null,

  type: '',
  reviewType: '',
};

export const searchSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addDetailBook: (state, action) => {
      return {
        ...state,
        detailBook: action.payload,
      };
    },

    addReadBook: (state, action) => {
      return {
        ...state,
        readBook: action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      //#region retrieve search
      .addCase(retrieveSearchBooks.pending, (state, action) => {
        return {
          ...state,
          type: action.type,
        };
      })
      .addCase(retrieveSearchBooks.fulfilled, (state, action) => {
        return {
          ...state,
          books: action.payload,
          type: action.type,
        };
      })
      .addCase(retrieveSearchBooks.rejected, (state, action) => {
        return {
          ...state,
          type: action.type,
        };
      })
      //#endregion retrieve search

      //#region retrieve review book
      .addCase(retrieveReviewBook.pending, (state, action) => {
        return {
          ...state,
          reviewType: action.type,
        };
      })
      .addCase(retrieveReviewBook.fulfilled, (state, action) => {
        return {
          ...state,
          reviewBook: action.payload,
          reviewType: action.type,
        };
      })
      .addCase(retrieveReviewBook.rejected, (state, action) => {
        return {
          ...state,
          reviewType: action.type,
        };
      });
    //#endregion retrieve review book
  },
});

const { actions, reducer: searchReducer } = searchSlice;
export const { addDetailBook, addReadBook } = actions;
export default searchReducer;
