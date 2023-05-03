import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { Reducers } from '@/config/redux/reducers/reducers';
import thunkMiddleware from 'redux-thunk';

const persistConfig = { key: 'root', storage, whitelist: ['user'] };

const persistatedReducers = persistReducer(persistConfig, Reducers);

const Store = configureStore({
  reducer: persistatedReducers,
  middleware: [thunkMiddleware],
});

export const persiststore = persistStore(Store);

export default Store;
