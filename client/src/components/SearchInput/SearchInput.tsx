import React from 'react';

import { InputAdornment } from '@material-ui/core';
// eslint-disable-next-line import/no-extraneous-dependencies
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// eslint-disable-next-line import/no-extraneous-dependencies
import { faArrowLeft, faSearch } from '@fortawesome/free-solid-svg-icons';
import { StyledFormControl, StyledInput } from './SearchInput.styles';
import history from '../../history';

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
    <StyledFormControl fullWidth>
      <StyledInput
        id="standard-adornment-amount"
        onChange={(e) => onChangeHandler(e)}
        onKeyDown={(e) => onKeyDownHandler(e)}
        startAdornment={
          <InputAdornment position="start" onClick={backSpaceHandler}>
            <FontAwesomeIcon icon={faArrowLeft} size="lg" />
          </InputAdornment>
        }
        endAdornment={
          <InputAdornment position="start" onClick={searchClickHandler}>
            <FontAwesomeIcon icon={faSearch} size="lg" />
          </InputAdornment>
        }
      />
    </StyledFormControl>
  );
};

export default SearchInput;
