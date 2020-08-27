import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';
import {
  StyledDeleteIcon,
  StyledListHeader,
  StyledSearchHistoryWrap,
  StyledListItem,
} from './SearchHistory.styles';

import CloseIcon from '@material-ui/icons/Close';

const datas = ['과자', '두유', '우유', '라면', '야채'];

const SearchHistory = () => {
  const historyList = () =>
    datas.map((text, idx) => (
      <StyledListItem key={idx} button>
        <ListItemText primary={text} />
        <StyledDeleteIcon>
          <CloseIcon />
        </StyledDeleteIcon>
      </StyledListItem>
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
