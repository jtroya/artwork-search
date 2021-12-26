import React from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { searchKeyword, getKeyword, getLoading } from '../../store/searchSlice';

import { SearchIcon, Spinner } from '../icons';

interface SearchBoxProps {
  placeholder?: string;
}

export const SearchBox: React.VFC<SearchBoxProps> = ({
  placeholder = 'Search',
}) => {
  const keywordStored = useAppSelector(getKeyword);
  const [keyword, setKeyword] = React.useState(() => keywordStored || '');
  const showLoader = useAppSelector(getLoading);
  const dispatch = useAppDispatch();
  const isDisable = keyword.trim() === '' || keyword.length < 3;

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setKeyword(event.target.value);
  };

  const handleSearch = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (keyword !== '' && keyword.length >= 3) {
      dispatch(searchKeyword({ keyword, page: 1 }));
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch} className="flex items-center justify-items">
        <input
          data-testid="search-input"
          type="search"
          className="w-5/6 h-7 px-1 bg-gray-100 border-b border-blue-200 outline-none mr-1 text-sm"
          placeholder={placeholder}
          value={keyword}
          onChange={handleOnChange}
        />
        <button
          data-testid="submit-search"
          type="submit"
          className="w-7 p-1 bg-blue-300 rounded text-white focus:outline-none hover:opacity-75 disabled:opacity-50"
          disabled={isDisable}
        >
          {showLoader ? <Spinner /> : <SearchIcon />}
        </button>
      </form>
    </div>
  );
};
