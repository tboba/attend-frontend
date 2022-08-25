import React, { useState, createContext, useContext } from 'react';
import { debounce } from 'lodash';

type SearchContextObj = {
  searchValue: string;
  debounce: (newSearchValue: string) => void;
};

const SearchContext = createContext<SearchContextObj>({
  searchValue: '',
  debounce: () => null,
});

const SearchContextProvider: React.FC<{ children: React.ReactNode }> = (props) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchValueChange = debounce(async (newSearchValue) => {
    setSearchValue(newSearchValue);
  }, 300);

  const contextValue: SearchContextObj = {
    searchValue,
    debounce: handleSearchValueChange,
  };

  return <SearchContext.Provider value={contextValue}>{props.children}</SearchContext.Provider>;
};

export const useSearchContext = () => useContext(SearchContext);

export default SearchContextProvider;
