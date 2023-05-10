import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const retrieveSearchBooks = createAsyncThunk(
  'product/retrieveSearch',
  async (param) => {
    const res = await axios.get(
      `${process.env.API_URL}/volumes?q=intitle:${param.search}&key=${process.env.API_KEY}`
    );
    return res.data;
  }
);
