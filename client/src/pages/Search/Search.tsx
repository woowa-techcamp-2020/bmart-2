import * as React from 'react';
import { useState } from 'react';
import SearchInput from '../../components/SearchInput';
import { StyledSearchWrap } from './Search.styles';
import SearchHistory from '../../components/SearchHistory';

const Search = () => {
  const [keyword, setKeyword] = useState('');
  return (
    <StyledSearchWrap>
      <SearchInput setKeyword={setKeyword} keyword={keyword} />
      <SearchHistory />
    </StyledSearchWrap>
  );
};

export default Search;
