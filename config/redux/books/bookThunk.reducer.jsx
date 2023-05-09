import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { db } from '@/config/firebase/sdk/sdk';
import { collection, getDocs } from 'firebase/firestore';

export const retrieveSearchBooks = createAsyncThunk(
  'product/retrieveSearch',
  async (param) => {
    const res = await axios.get(
      `${process.env.API_URL}/volumes?q=intitle:${param.search}&key=${process.env.API_KEY}`
    );
    return res.data;
  }
);

export const retrieveReviewBook = createAsyncThunk(
  'product/retrieveReview',
  async (param) => {
    const colRef = collection(db, 'ulasan');
    const snapshots = await getDocs(colRef);
    const docs = await snapshots.docs.map((doc) => doc.data());
    const filteringBook = await docs.filter(
      (doc) => doc.bookId === param.bookId
    );
    return filteringBook;
  }
);
