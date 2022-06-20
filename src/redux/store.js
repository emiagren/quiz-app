import { configureStore } from '@reduxjs/toolkit';
import { reducerSlice } from './slices';

export const store = configureStore({
  reducer: {
    someAction: reducerSlice.reducer,
  }
})

export default store;