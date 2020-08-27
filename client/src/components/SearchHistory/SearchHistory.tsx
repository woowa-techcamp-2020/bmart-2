import React, { useEffect, useState } from 'react';
import { List, Button, ListItemText } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import {
  getHistories,
  removeHistory,
  removeHistoryAll,
} from '../../apis/searchHistory';
import {
  StyledDeleteIcon,
  StyledListHeader,
  StyledSearchHistoryWrap,
  StyledListItem,
  StyledRemoveAll,
} from './SearchHistory.styles';
import { ISearchHistory } from '../../../../types/modelTypes';
import history from '../../history';
import { getCookie, isLogin } from '../../util/common';

interface ISearchHistoryProps {
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
  keyword: string;
  setPath: React.Dispatch<React.SetStateAction<string>>;
}
const SearchHistory = ({
  setKeyword,
  keyword,
  setPath,
}: ISearchHistoryProps) => {
  const [searchHistories, setSearchHistories] = useState<
    ISearchHistory[] | null
  >(null);
  useEffect(() => {
    const getSearchHistories = async () => {
      const newHistories = await getHistories();
      setSearchHistories(newHistories);
    };
    getSearchHistories();
  }, []);

  const closeHandler = async (id: number) => {
    const res = await removeHistory(id);
    if (res)
      setSearchHistories(
        searchHistories?.filter((searchHistory) => searchHistory.id !== id)!
      );
  };

  const keywordClickHandler = (selectedKeyword: string) => {
    setKeyword(selectedKeyword);
    const delay = 200;
    setTimeout(() => {
      history.push(`/result?keyword=${selectedKeyword}`);
      setPath(history.location.pathname);
    }, delay);
  };

  const historyList = () =>
    searchHistories?.map((searchHistory) => (
      <StyledListItem key={searchHistory.id} button>
        <ListItemText
          primary={searchHistory.keyword}
          onClick={() => keywordClickHandler(searchHistory.keyword!)}
        />
        <StyledDeleteIcon onClick={() => closeHandler(searchHistory.id!)}>
          <CloseIcon />
        </StyledDeleteIcon>
      </StyledListItem>
    ));

  const renderRemoveButton = () => {
    if (searchHistories !== null && searchHistories.length > 0) {
      return (
        <Button variant="outlined" color="secondary" size="small">
          전체삭제
        </Button>
      );
    }
    return <></>;
  };

  const remveAllHandler = async () => {
    const userId = getCookie('userId');
    const res = await removeHistoryAll(parseInt(userId!, 10));
    if (res) setSearchHistories([]);
  };

  return (
    <StyledSearchHistoryWrap>
      {isLogin() ? (
        <List
          subheader={
            <StyledListHeader id="nested-list-subheader">
              최근검색어
            </StyledListHeader>
          }
        >
          {historyList()}
          <StyledRemoveAll onClick={remveAllHandler}>
            {renderRemoveButton()}
          </StyledRemoveAll>
        </List>
      ) : (
        <div />
      )}
    </StyledSearchHistoryWrap>
  );
};

export default SearchHistory;
