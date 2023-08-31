import React from 'react'
import { createContext, useContext, useState } from 'react';

    const SearchContext = createContext();
    
    export const useSearchData = () => useContext(SearchContext);
    
    export const SearchProvider = ({ children }) => {
      const [searchData, setSearchData] = useState(null);
    
      const SearchDataFun = (newData) => {
        setSearchData(newData);
      };
    
      return (
        <SearchContext.Provider value={{ searchData, SearchDataFun }}>
          {children}
        </SearchContext.Provider>
      );
    };


