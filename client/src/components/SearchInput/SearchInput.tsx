import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
// eslint-disable-next-line import/no-extraneous-dependencies
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// eslint-disable-next-line import/no-extraneous-dependencies
import { faArrowLeft, faSearch } from '@fortawesome/free-solid-svg-icons';
import { StyledFormControl, StyledInput } from './SearchInput.styles';

const SearchInput = () => {
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  return (
    <StyledFormControl fullWidth>
      <StyledInput
        id="standard-adornment-amount"
        // onChange={handleChange('amount')}
        startAdornment={
          <InputAdornment position="start">
            <FontAwesomeIcon icon={faArrowLeft} size="lg" />
          </InputAdornment>
        }
        endAdornment={
          <InputAdornment position="start">
            <FontAwesomeIcon icon={faSearch} size="lg" />
          </InputAdornment>
        }
      />
    </StyledFormControl>
  );
};

export default SearchInput;
