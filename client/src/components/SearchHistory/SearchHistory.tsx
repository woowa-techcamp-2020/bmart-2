import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';
// eslint-disable-next-line import/no-extraneous-dependencies
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// eslint-disable-next-line import/no-extraneous-dependencies
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { getHistories } from '../../apis/searchHistory';
import {
  StyledDeleteIcon,
  StyledListHeader,
  StyledSearchHistoryWrap,
  StyledListItem,
} from './SearchHistory.styles';
import { ISearchHistory } from '../../../../types/modelTypes';

const datas = ['과자', '두유', '우유', '라면', '야채'];

const SearchHistory = () => {
  const [histories, setHistories] = useState<ISearchHistory[]>([]);
  useEffect(() => {
    const getSearchHistories = async () => {
      const newHistories = await getHistories();
      setHistories(newHistories);
    };
    getSearchHistories();
  }, []);
  const historyList = () =>
    histories.map((searchHistory) => (
      <StyledListItem key={searchHistory.id} button>
        <ListItemText primary={searchHistory.keyword} />
        <StyledDeleteIcon>
          <FontAwesomeIcon icon={faTimes} size="lg" />
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
