import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Toolbar from '@material-ui/core/Toolbar';
import { ThemeProvider } from 'styled-components';
import {
  StyledLogoH,
  StyledInput,
  StyledToolbar,
  StyledButton,
  StyledAppBar,
} from './Header.styles';
import history from '../../history';

const title = 'B mart';

export default function Header() {
  const renderInMainPage = () => {
    return (
      <>
        <StyledLogoH variant="h6">{title}</StyledLogoH>
        <StyledButton aria-label="search">
          <SearchIcon />
        </StyledButton>
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
        <StyledButton aria-label="search">
          <SearchIcon />
        </StyledButton>
        <StyledButton aria-label="menu">
          <MenuIcon />
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
    switch (history.location.pathname) {
      case '/':
        return renderInMainPage();
      case '/category':
        return renderInCategoryPage();
      case '/cart':
        return renderInCartPage();
      default:
        return <></>;
    }
  };
  return history.location.pathname !== '/search' ? (
    <div>
      <StyledAppBar>
        <StyledToolbar>
          <StyledButton color="inherit">
            <ArrowBackIcon />
          </StyledButton>
          {renderByPage()}
        </StyledToolbar>
      </StyledAppBar>
      <Toolbar />
    </div>
  ) : (
    <div />
  );
}

Header.defaultProps = {
  title: 'B mart',
  page: 'category',
};
