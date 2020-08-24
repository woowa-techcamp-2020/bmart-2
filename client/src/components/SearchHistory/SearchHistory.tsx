import React from 'react';
import {
  List,
  ListSubheader,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@material-ui/core';
// eslint-disable-next-line import/no-extraneous-dependencies
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// eslint-disable-next-line import/no-extraneous-dependencies
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import InputAdornment from '@material-ui/core/InputAdornment';
import {
  StyledDeleteIcon,
  StyledListHeader,
  StyledSearchHistoryWrap,
} from './SearchHistory.styles';

const datas = ['과자', '두유', '우유', '라면', '야채'];

const SearchHistory = () => {
  const historyList = () =>
    datas.map((text, idx) => (
      <ListItem key={idx}>
        <ListItemText primary={text} />
        <StyledDeleteIcon>
          <FontAwesomeIcon icon={faTimes} size="lg" />
        </StyledDeleteIcon>
      </ListItem>
    ));
  return (
    <StyledSearchHistoryWrap>
      <List
        subheader={
          <StyledListHeader id="nested-list-subheader">
            최근 검색어
          </StyledListHeader>
        }
      >
        {historyList()}
      </List>
    </StyledSearchHistoryWrap>
  );
};

export default SearchHistory;
