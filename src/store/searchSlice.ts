import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from '@reduxjs/toolkit';

import { CollectionResponseProps, getCollection } from '../api';
import { RootState } from './store';

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

// Thunks
export const searchKeyword = createAsyncThunk(
  'search/fetchingKeyword',
  async ({ keyword, page = 1 }: { keyword: string; page: number }) => {
    const response = await getCollection(keyword, page);
    return { response, page };
  },
);

// Reducers
const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(searchKeyword.pending, (state, action) => {
      state.loading = true;
      state.keyword = action.meta.arg.keyword;
    });
    builder.addCase(searchKeyword.fulfilled, (state, action) => {
      const { count } = action.payload.response;

      if (count === 0) {
        state.loading = false;
        state.noResults = true;
        state.results.count = 0;
        state.results.artObjects = [];
        state.currentPage = 0;
      }

      if (count > 0) {
        if (action.meta.arg.page > 1) {
          state.results.artObjects = state.results.artObjects.concat(
            action.payload.response.artObjects,
          );
        } else {
          state.results = action.payload.response;
        }

        state.loading = false;
        state.noResults = false;
        state.currentPage = action.meta.arg.page;
      }
    });
    builder.addCase(searchKeyword.rejected, (state, action) => {
      console.error('Error searching.', action.error.message);
      state.loading = false;
      state.noResults = true;
      state.error.state = true;
      state.error.message = action.error.message || 'Unknown error';
    });
  },
});

// Selectors
export const getLoading = createSelector(
  (state: RootState) => state.search.loading,
  loading => loading,
);

export const hasMoreResults = createSelector(
  (state: RootState) => {
    const { count, artObjects } = state.search.results;
    const RESULTS_PER_PAGE = parseInt(
      process.env.REACT_APP_RESULTS_PER_PAGE || '10',
      10,
    );
    return count > 0 && count > RESULTS_PER_PAGE && count > artObjects.length;
  },
  result => result,
);

export const getKeyword = createSelector(
  (state: RootState): string => state.search.keyword,
  keyword => keyword,
);

export const getErrorSearch = createSelector(
  (state: RootState) => state.search.error,
  error => (error.state ? error.message : ''),
);

export const getCurrentPage = createSelector(
  (state: RootState) => state.search.currentPage,
  page => page,
);

export const getResults = createSelector(
  (state: RootState) => state.search.results,
  results => results,
);

export const getNoResults = createSelector(
  (state: RootState) => state.search.noResults,
  noResult => noResult,
);

export default searchSlice.reducer;
