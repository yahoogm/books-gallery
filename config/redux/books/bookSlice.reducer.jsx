import { createSlice } from '@reduxjs/toolkit';
import { retrieveSearchBooks } from './bookThunk.reducer';

const initialState = {
  books: [],
  readBook: [],
  reviewBook: [],
  detailBook: null,
  reviewId: '',

  type: '',
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

    addReviewBook: (state, action) => {
      return {
        ...state,
        reviewBook: action.payload,
      };
    },

    addReviewId: (state, action) => {
      return {
        ...state,
        reviewId: action.payload,
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
      });
    //#endregion retrieve search
  },
});

const { actions, reducer: searchReducer } = searchSlice;
export const { addDetailBook, addReadBook, addReviewBook, addReviewId } =
  actions;
export default searchReducer;
