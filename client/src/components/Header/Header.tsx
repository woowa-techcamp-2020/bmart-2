import React, { useEffect, useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Toolbar from '@material-ui/core/Toolbar';
import {
  StyledLogoH,
  StyledToolbar,
  StyledButton,
  StyledAppBar,
} from './Header.styles';
import history from '../../history';

const title = 'B mart';

interface IHeaderProps {
  path: string;
  setPath: React.Dispatch<React.SetStateAction<string>>;
}

export default function Header({ path, setPath }: IHeaderProps) {
  const searchHandler = () => {
    history.push('/search');
    setPath(history.location.pathname);
  };

  useEffect(() => {
    const setPathHandler = () => {
      setPath(history.location.pathname);
    };
    window.onpopstate = setPathHandler;
  }, []);

  const menuHandler = () => {
    history.push('/menu');
  };

  const menuPageButton = () => {
    return (
      <StyledButton onClick={menuHandler} aria-label="menu">
        <MenuIcon />
      </StyledButton>
    );
  };

  const renderInMainPage = () => {
    return (
      <>
        <StyledLogoH variant="h6">{title}</StyledLogoH>
        <StyledButton aria-label="search" onClick={searchHandler}>
          <SearchIcon />
        </StyledButton>
        {menuPageButton()}
      </>
    );
  };

  const renderInCategoryPage = () => {
    return (
      <>
        <StyledLogoH variant="h6">{title}</StyledLogoH>
        <StyledButton aria-label="search" onClick={searchHandler}>
          <SearchIcon />
        </StyledButton>
        {menuPageButton()}
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
    switch (path) {
      case '/':
        return renderInMainPage();
      case '/category':
        return renderInCategoryPage();
      case '/cart':
        return renderInCartPage();
      case '/menu':
        return <></>;
      default:
        return renderInMainPage();
    }
  };

  const backSpaceHandler = () => {
    history.goBack();
    setPath(history.location.pathname);
  };

  return history.location.pathname !== '/search' ? (
    <div>
      <StyledAppBar>
        <StyledToolbar>
          <StyledButton color="inherit" onClick={backSpaceHandler}>
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
