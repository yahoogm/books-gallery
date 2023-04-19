import { configureStore } from '@reduxjs/toolkit';
import { Reducers } from '@/config/redux/reducers/reducers';

export const Store = configureStore({
  reducer: Reducers,
});
