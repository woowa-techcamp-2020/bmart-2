import React from 'react';
import {
  StyledSelectListContaienr,
  StyledSelectListWrapper,
  StyledSelectList,
  StyledItem,
} from './SelectSortList.styles';

interface ISelectSortListProps {
  open: boolean;
  setOpen: Function;
  selected: number;
  setSelected: Function;
  sortType: string[];
}

const SelectSortList = ({
  open,
  setOpen,
  selected,
  setSelected,
  sortType,
}: ISelectSortListProps) => {
  const clickItem = (id: number) => {
    setSelected(id);
    setOpen(false);
  };

  const selectItems = () => {
    return sortType.map((item, i) => (
      <StyledItem
        key={`select-wort-item-${i}`}
        onClick={() => clickItem(i)}
        selected={selected === i}
      >
        {item}
      </StyledItem>
    ));
  };

  return (
    <StyledSelectListContaienr open={open} onClick={() => setOpen(false)}>
      <StyledSelectListWrapper>
        <StyledSelectList open={open}>{selectItems()}</StyledSelectList>
      </StyledSelectListWrapper>
    </StyledSelectListContaienr>
  );
};

export default SelectSortList;
