import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {
  StyledLogoH,
  StyledInput,
  StyledToolbar,
  StyledButton,
} from './Header.styles';

interface HeaderProps {
  title: string;
  page: string;
}

export default function Header({ title, page }: HeaderProps) {
  const renderInSearchPage = () => {
    return (
      <>
        <StyledInput />
        <StyledButton aria-label="search">
          <SearchIcon />
        </StyledButton>
      </>
    );
  };

  const renderInMainPage = () => {
    return (
      <>
        <StyledLogoH variant="h6">{title}</StyledLogoH>
        <StyledButton aria-label="menu">
          <MenuIcon />
        </StyledButton>
      </>
    );
  };

  const renderInCategoryPage = () => {
    return (
      <>
        <StyledLogoH variant="h6">{title}</StyledLogoH>
        <StyledButton aria-label="menu">
          <MenuIcon />
        </StyledButton>
        <StyledButton aria-label="search">
          <SearchIcon />
        </StyledButton>
      </>
    );
  };

  const renderInCartPage = () => {
    return (
      <>
        <StyledLogoH variant="h6">{title}</StyledLogoH>
      </>
    );
  };

  const renderByPage = () => {
    switch (page) {
      case 'main':
        return renderInMainPage();
      case 'category':
        return renderInCategoryPage();
      case 'search':
        return renderInSearchPage();
      case 'cart':
        return renderInCartPage();
      default:
        return '';
    }
  };

  return (
    <div>
      <AppBar position="static" color="inherit">
        <StyledToolbar>
          <StyledButton color="inherit">
            <ArrowBackIcon />
          </StyledButton>
          {renderByPage()}
        </StyledToolbar>
      </AppBar>
    </div>
  );
}

Header.defaultProps = {
  title: 'B-MART',
  page: 'category',
};
