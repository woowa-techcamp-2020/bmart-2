import React from 'react';
import { StyledButton, StyledLogoH } from '../Header/Header.styles';
import { StyledFormControl, StyledInput } from './SearchInput.styles';
import history from '../../history';

import SearchIcon from '@material-ui/icons/Search';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import InputBase from '@material-ui/core/InputBase';

import IconButton from '@material-ui/core/IconButton';

interface ISearchInputProps {
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
  keyword: string;
  setPath: React.Dispatch<React.SetStateAction<string>>;
}

const SearchInput = ({ setKeyword, keyword, setPath }: ISearchInputProps) => {
  const onChangeHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setKeyword(event.target.value);
  };

  const onKeyDownHandler = (
    event: React.KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    if (event.key === 'Enter') {
      history.push(`/result?keyword=${keyword}`);
      setPath(history.location.pathname);
    }
  };

  const searchClickHandler = () => {
    history.push(`/result?keyword=${keyword}`);
    setPath(history.location.pathname);
  };

  const backSpaceHandler = () => {
    history.goBack();
    setPath(history.location.pathname);
  };

  return (
    <StyledFormControl>
      <StyledButton color="inherit" onClick={backSpaceHandler}>
        <ArrowBackIcon />
      </StyledButton>
      <StyledLogoH>
        <StyledInput
          id="standard-adornment-amount"
          onChange={(e) => onChangeHandler(e)}
          onKeyDown={(e) => onKeyDownHandler(e)}
          placeholder="검색어를 입력하세요"
        />
      </StyledLogoH>
      <StyledButton onClick={searchClickHandler} aria-label="menu">
        <SearchIcon />
      </StyledButton>
    </StyledFormControl>
  );
};

export default SearchInput;
