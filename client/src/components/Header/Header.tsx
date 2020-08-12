import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import InputBase from '@material-ui/core/InputBase';
import { StyledLogoH, StyledInput } from './Header.styles';

interface HeaderProps {
  title: string;
  page: string;
}

export default function Header({ title, page }: HeaderProps) {
  const renderInSearchPage = () => {
    return (
      <>
        <StyledInput />
        <Button aria-label="search">
          <SearchIcon />
        </Button>
      </>
    );
  };

  const renderInMainPage = () => {
    return (
      <>
        <StyledLogoH variant="h6">{title}</StyledLogoH>
        <Button aria-label="menu">
          <MenuIcon />
        </Button>
      </>
    );
  };

  const renderInCategoryPage = () => {
    return (
      <>
        <StyledLogoH variant="h6">{title}</StyledLogoH>
        <Button aria-label="menu">
          <MenuIcon />
        </Button>
        <Button aria-label="search">
          <SearchIcon />
        </Button>
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
        <Toolbar>
          <Button color="inherit">
            <ArrowBackIcon />
          </Button>
          {renderByPage()}
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.defaultProps = {
  title: 'B-MART',
  page: 'category',
};
