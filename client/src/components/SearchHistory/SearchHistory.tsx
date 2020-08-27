import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { getHistories, removeHistory } from '../../apis/searchHistory';
import {
  StyledDeleteIcon,
  StyledListHeader,
  StyledSearchHistoryWrap,
  StyledListItem,
} from './SearchHistory.styles';
import { ISearchHistory } from '../../../../types/modelTypes';

const SearchHistory = () => {
  const [histories, setHistories] = useState<ISearchHistory[]>([]);
  useEffect(() => {
    const getSearchHistories = async () => {
      const newHistories = await getHistories();
      setHistories(newHistories);
    };
    getSearchHistories();
  }, []);

  const closeHandler = async (id: number) => {
    const res = await removeHistory(id);
    if (res) setHistories(histories.filter((history) => history.id !== id));
  };

  const historyList = () =>
    histories.map((searchHistory) => (
      <StyledListItem key={searchHistory.id} button>
        <ListItemText primary={searchHistory.keyword} />
        <StyledDeleteIcon onClick={() => closeHandler(searchHistory.id!)}>
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
