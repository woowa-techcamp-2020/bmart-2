import * as React from 'react';
import SearchInput from '../../components/SearchInput';
import { StyledSearchWrap } from './Search.styles';
import SearchHistory from '../../components/SearchHistory';

const Search = () => {
  return (
    <StyledSearchWrap>
      <SearchInput />
      <SearchHistory />
    </StyledSearchWrap>
  );
};

export default Search;
