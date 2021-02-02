import { RootState } from './store';

export interface SearchState {
  keyword: string;
}

export interface SearchAction {
  type: typeof UPDATE_KEYWORD;
  payload: string;
}

export const initialState: SearchState = {
  keyword: '',
};

// action types
export const UPDATE_KEYWORD = 'search/keywordUpdated';

// reducers
export function searchReducer(
  state = initialState,
  action: SearchAction,
): SearchState {
  switch (action.type) {
    case UPDATE_KEYWORD:
      return {
        ...state,
        keyword: action.payload,
      };

    default:
      return state;
  }
}

// selectors
export const getKeyword = (state: RootState): string => state.search.keyword;

// action creators
export const updateKeyword = (keyword: string): SearchAction => ({
  type: UPDATE_KEYWORD,
  payload: keyword,
});
