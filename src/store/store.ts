import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { searchReducer } from './search';

const rootReducer = combineReducers({
  search: searchReducer,
});
let middlewares = applyMiddleware(thunk);

if (process.env.NODE_ENV === 'development') {
  middlewares = Object.assign(applyMiddleware(thunk, logger));
}

export type RootState = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer, middlewares);
