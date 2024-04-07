import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './filterSlice';

export default configureStore({
  reducer: {
    data: dataReducer,
  },
});