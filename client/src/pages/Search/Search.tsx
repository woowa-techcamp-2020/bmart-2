import * as React from 'react';
import { useState } from 'react';
import SearchInput from '../../components/SearchInput';
import { StyledSearchWrap } from './Search.styles';
import SearchHistory from '../../components/SearchHistory';
import { usePageDispatch } from '../../context/pageContext';
import history from '../../history';

const Search = () => {
  const [keyword, setKeyword] = useState('');
  const pageDispatch = usePageDispatch();

  const setPath = () => {
    pageDispatch!({
      type: 'PATHNAME_CHANGE',
      pathname: history.location.pathname,
    });
  };
  return (
    <StyledSearchWrap>
      <SearchInput
        setKeyword={setKeyword}
        keyword={keyword}
        setPath={setPath}
      />
      <SearchHistory
        setKeyword={setKeyword}
        keyword={keyword}
        setPath={setPath}
      />
    </StyledSearchWrap>
  );
};

export default Search;
