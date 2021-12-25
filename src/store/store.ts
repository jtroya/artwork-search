import { createStore, combineReducers, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { searchReducer } from './search';
import searchSliceReducer from './searchSlice';

export const rootReducer = combineReducers({
  search: searchReducer,
});
let middlewares = applyMiddleware(thunk);

if (process.env.NODE_ENV === 'development') {
  middlewares = Object.assign(applyMiddleware(thunk, logger));
}

export const oldStore = createStore(rootReducer, middlewares);

export const store = configureStore({
  reducer: {
    search: searchSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
