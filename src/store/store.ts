import { configureStore } from '@reduxjs/toolkit';

import searchSliceReducer from './searchSlice';

export const store = configureStore({
  reducer: {
    search: searchSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
