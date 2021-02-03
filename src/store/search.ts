import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { RootState } from './store';
import { getCollection, CollectionResponseProps } from '../api';

export interface SearchState {
  keyword: string;
  results: CollectionResponseProps;
}

// actions
export interface SearchAction {
  type: typeof UPDATE_KEYWORD;
  payload: string;
}
export interface SearchKeywordAction {
  type: typeof SEARCH_KEYWORD;
  payload: CollectionResponseProps;
}

export type SearchActionTypes = SearchAction | SearchKeywordAction;

export const initialState: SearchState = {
  keyword: '',
  results: {
    count: 0,
    artObjects: [],
  },
};

// action types
export const UPDATE_KEYWORD = 'search/keywordUpdated';
export const SEARCH_KEYWORD = 'search/keywordSearch';
export const SEARCH_NO_RESULTS = 'search/noResults';

// reducers
export function searchReducer(
  state = initialState,
  action: SearchActionTypes,
): SearchState {
  switch (action.type) {
    case UPDATE_KEYWORD:
      return {
        ...state,
        keyword: action.payload,
      };
    case SEARCH_KEYWORD:
      return {
        ...state,
        results: action.payload,
      };
    default:
      return state;
  }
}

// selectors
export const getKeyword = (state: RootState): string => state.search.keyword;
export const getResults = (state: RootState): CollectionResponseProps =>
  state.search.results;

// action creators
export const updateKeyword = (keyword: string): SearchAction => ({
  type: UPDATE_KEYWORD,
  payload: keyword,
});

export const searchKeyword = (
  keyword: string,
): ThunkAction<void, RootState, unknown, Action<string>> => async dispatch => {
  dispatch({ type: UPDATE_KEYWORD, payload: keyword });
  const response = await getCollection(keyword);
  dispatch({ type: SEARCH_KEYWORD, payload: response });
};
