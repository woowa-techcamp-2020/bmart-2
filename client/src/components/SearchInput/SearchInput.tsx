import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import { StyledButton, StyledLogoH } from '../Header/Header.styles';
import { StyledFormControl, StyledInput } from './SearchInput.styles';
import { createSearchHistory } from '../../apis/searchHistory';

import history from '../../history';
import { getCookie, isLogin } from '../../util/common';

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

  const createSearchHistoryUsingKeyword = () => {
    if (isLogin() && keyword.trim() !== '') {
      const userIdStr = getCookie('userId');
      const userId = parseInt(userIdStr!, 10);
      createSearchHistory({
        userId,
        keyword,
      });
    }
  };

  const validateKeyword = () => {
    if (keyword.trim() === '') {
      alert('빈 검색어입니다.');
      return false;
    }
    return true;
  };

  const onKeyDownHandler = (
    event: React.KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    if (event.key === 'Enter' && validateKeyword()) {
      createSearchHistoryUsingKeyword();
      history.push(`/result?keyword=${keyword}`);
      setPath(history.location.pathname);
    }
  };

  const searchClickHandler = () => {
    if (!validateKeyword()) return;
    history.push(`/result?keyword=${keyword}`);
    createSearchHistoryUsingKeyword();
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
          value={keyword}
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
