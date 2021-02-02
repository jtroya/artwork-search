import React from 'react';

import { SearchIcon } from '../icons';

interface SearchBoxProps {
  term: string;
  handleSubmit: (keyword: string) => void;
}

export const SearchBox: React.FC<SearchBoxProps> = ({
  term,
  handleSubmit,
}: SearchBoxProps) => {
  const [keyword, setKeyword] = React.useState(term);
  const isDisable = keyword.trim() === '' || keyword.length < 3;

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setKeyword(event.target.value);
  };

  const handleSearch = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (keyword !== '' && keyword.length >= 3) {
      handleSubmit(keyword);
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
          className="w-8 p-1 bg-blue-300 text-white focus:outline-none hover:opacity-75"
          disabled={isDisable}
        >
          <SearchIcon />
        </button>
      </form>
    </div>
  );
};
