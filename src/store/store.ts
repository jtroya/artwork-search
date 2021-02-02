import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { searchReducer } from './search';

const rootReducer = combineReducers({
  search: searchReducer,
});
const middlewares = applyMiddleware(thunk, logger);

export type RootState = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer, middlewares);
