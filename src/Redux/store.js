import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import counterSlice from './Slices/counterSlice';

export default configureStore({
  reducer: {
    counter: counterSlice,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), logger],
  preloadedState: {
    counter: {
      value: 13,
    },
  },
});
