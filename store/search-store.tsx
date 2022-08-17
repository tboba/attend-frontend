import React, {useState} from "react";
import {debounce} from "lodash";

type SearchContextObj = {
    searchValue: string,
    debounce: (newSearchValue: string) => void,
}

export const SearchContext = React.createContext<SearchContextObj>({
    searchValue: '',
    debounce: (newSearchValue) => {
    },
});

const SearchContextProvider: React.FC<{ children: React.ReactNode }> = (props) => {
    const [searchValue, setSearchValue] = useState('');

    const handleSearchValueChange = debounce(async (newSearchValue) => {
        setSearchValue(newSearchValue);
        console.log('debounced!');
    }, 300);

    const contextValue: SearchContextObj = {
        searchValue: searchValue,
        debounce: handleSearchValueChange,
    }


    return <SearchContext.Provider value={contextValue}>
        {props.children}
    </SearchContext.Provider>
}

export default SearchContextProvider;