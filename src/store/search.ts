import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { RootState } from './store';
import { getCollection, CollectionResponseProps } from '../api';

export interface SearchState {
  keyword: string;
  results: CollectionResponseProps;
  noResults: boolean;
  loading: boolean;
  currentPage: number;
  error: {
    state: boolean;
    message: string;
  };
}

// actions
export interface SearchAction {
  type: typeof UPDATE_KEYWORD;
  payload: string;
}

export interface SearchShowLoadingAction {
  type: typeof SEARCH_KEYWORD;
  payload: boolean;
}

export interface SearchKeywordAction {
  type:
    | typeof SEARCH_KEYWORD_SUCCESSFUL
    | typeof SEARCH_NO_RESULTS
    | typeof SEARCH_ERROR;
  payload: { results: CollectionResponseProps; currentPage: number };
}

export interface SearchMoreResultsAction {
  type: typeof SEARCH_MORE_RESULTS_SUCCESSFUL;
  payload: { results: CollectionResponseProps; currentPage: number };
}

export type SearchActionTypes =
  | SearchAction
  | SearchKeywordAction
  | SearchShowLoadingAction
  | SearchMoreResultsAction;

export const initialState: SearchState = {
  keyword: '',
  results: {
    count: 0,
    artObjects: [],
  },
  noResults: false,
  loading: false,
  currentPage: 0,
  error: {
    state: false,
    message: '',
  },
};

// action types
export const UPDATE_KEYWORD = 'search/keywordUpdated';
export const SEARCH_KEYWORD_SUCCESSFUL = 'search/keywordSearchSuccessful';
export const SEARCH_KEYWORD = 'search/keywordSearch';
export const SEARCH_NO_RESULTS = 'search/noResults';
export const SEARCH_ERROR = 'search/error';
export const SEARCH_MORE_RESULTS_SUCCESSFUL = 'search/getMoreResultsSuccessful';

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
        loading: action.payload,
      };
    case SEARCH_KEYWORD_SUCCESSFUL:
      return {
        ...state,
        results: { ...action.payload.results },
        currentPage: 1,
        noResults: false,
      };
    case SEARCH_MORE_RESULTS_SUCCESSFUL:
      return {
        ...state,
        results: {
          ...action.payload.results,
          artObjects: [
            ...state.results.artObjects,
            ...action.payload.results.artObjects,
          ],
        },
        currentPage: action.payload.currentPage,
        noResults: false,
      };
    case SEARCH_NO_RESULTS:
      return {
        ...state,
        results: { ...action.payload.results },
        currentPage: 0,
        noResults: true,
      };
    case SEARCH_ERROR:
      return {
        ...state,
        results: { ...action.payload.results },
        currentPage: 0,
      };
    default:
      return state;
  }
}

// selectors
export const getKeyword = (state: RootState): string => state.search.keyword;
export const getTotalCount = (state: RootState): number =>
  state.search.results.count;
export const getResults = (state: RootState): CollectionResponseProps =>
  state.search.results;
export const getLoading = (state: RootState): boolean => state.search.loading;
export const getNoResults = (state: RootState): boolean =>
  state.search.noResults;
export const getCurrentPage = (state: RootState): number =>
  state.search.currentPage;

// action creators
export const updateKeyword = (keyword: string): SearchAction => ({
  type: UPDATE_KEYWORD,
  payload: keyword,
});

export const searchKeyword =
  (
    keyword: string,
    page = 1,
  ): ThunkAction<void, RootState, unknown, Action<string>> =>
  async dispatch => {
    try {
      dispatch({ type: SEARCH_KEYWORD, payload: true });
      const response = await getCollection(keyword, page);
      const { count } = response;
      const isInitialSearch = count > 0 && page === 1;
      const hasNoResults = count === 0;
      const hasMoreResults = count > 0 && !isInitialSearch;

      if (isInitialSearch) {
        dispatch({
          type: SEARCH_KEYWORD_SUCCESSFUL,
          payload: { results: response },
        });
      }

      if (hasNoResults) {
        dispatch({
          type: SEARCH_NO_RESULTS,
          payload: { ...initialState, keyword },
        });
      }

      if (hasMoreResults) {
        dispatch({
          type: SEARCH_MORE_RESULTS_SUCCESSFUL,
          payload: {
            results: response,
            currentPage: page,
          },
        });
      }
    } catch (error) {
      console.error('Error searching...', error);
      dispatch({
        type: SEARCH_ERROR,
        payload: { ...initialState, keyword },
      });
    } finally {
      dispatch({ type: SEARCH_KEYWORD, payload: false });
    }
  };
