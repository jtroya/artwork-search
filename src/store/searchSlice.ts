import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from '@reduxjs/toolkit';
import { getCollection } from '../api';

import { initialState } from './search';
import { RootState } from './store';

// Thunks
const searchKeyword = createAsyncThunk(
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
  reducers: {
    resultsUpdated(state, action) {
      return state;
    },
  },
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
        state.results = action.payload.response;
        state.loading = false;
        state.noResults = false;
        state.currentPage = action.meta.arg.page;
      }
    });
    builder.addCase(searchKeyword.rejected, (state, action) => {
      console.error('error', action.error.message);
      state.loading = false;
      state.noResults = true;
      state.results.count = 0;
      state.results.artObjects = [];
      state.error.state = true;
      state.error.message = action.error.message || '';
    });
  },
});

// Selectors
const getLoading = createSelector(
  (state: RootState) => state.search.loading,
  loading => loading,
);

const hasMoreResults = createSelector(
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

const getKeyword = createSelector(
  (state: RootState): string => state.search.keyword,
  keyword => keyword,
);

const getErrorSearch = createSelector(
  (state: RootState) => state.search.error,
  error => (error.state ? error.message : ''),
);

const getCurrentPage = createSelector(
  (state: RootState) => state.search.currentPage,
  page => page,
);

const getResults = createSelector(
  (state: RootState) => state.search.results,
  results => results,
);

// const hasToDisplayPagination = createSelector(
//   (state: RootState) => {
//     const { results, currentPage } = state.search;
//     return results.count > 0 && currentPage === 1
//   },
//   (result) => {
//     if (result) {

//     }
//   }
// )

export {
  getKeyword,
  getErrorSearch,
  searchKeyword,
  hasMoreResults,
  getLoading,
  getCurrentPage,
  getResults,
};

export const { resultsUpdated } = searchSlice.actions;
export default searchSlice.reducer;
