import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SearchIcon, Spinner } from '../icons';
import { getLoading, updateKeyword, searchKeyword } from '../../store/search';

export const SearchBox: React.FC = () => {
  const [keyword, setKeyword] = React.useState('');
  const showLoader = useSelector(getLoading);
  const dispatch = useDispatch();
  const isDisable = keyword.trim() === '' || keyword.length < 3;

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setKeyword(event.target.value);
  };

  const handleSearch = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (keyword !== '' && keyword.length >= 3) {
      dispatch(updateKeyword(keyword));
      dispatch(searchKeyword(keyword));
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch} className="flex items-center justify-items">
        <input
          type="search"
          className="w-5/6 h-7 px-1 bg-gray-100 border-b border-blue-200 outline-none mr-1 text-sm"
          placeholder="Search"
          value={keyword}
          onChange={handleOnChange}
        />
        <button
          type="submit"
          className="w-7 p-1 bg-blue-300 rounded text-white focus:outline-none hover:opacity-75"
          disabled={isDisable}
        >
          {showLoader ? <Spinner /> : <SearchIcon />}
        </button>
      </form>
    </div>
  );
};
