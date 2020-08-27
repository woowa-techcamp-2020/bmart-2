import * as React from 'react';
import { useState } from 'react';
import SearchInput from '../../components/SearchInput';
import { StyledSearchWrap } from './Search.styles';
import SearchHistory from '../../components/SearchHistory';

interface ISearchProps {
  setPath: React.Dispatch<React.SetStateAction<string>>;
}

const Search = ({ setPath }: ISearchProps) => {
  const [keyword, setKeyword] = useState('');
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
