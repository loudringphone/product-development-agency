
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import searchHistorySlice from './slices/searchHistorySlice';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['searchHistory']
  };
  
  const persistedReducer = persistReducer(persistConfig, combineReducers({
    searchHistory: searchHistorySlice,
  }));
  
  export const store = configureStore({
    reducer: persistedReducer,
  });
  
  export const persistor = persistStore(store);
