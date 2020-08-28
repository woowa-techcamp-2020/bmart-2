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
  ButtonZone,
} from './Header.styles';
import history from '../../history';
import { usePageDispatch, usePageState } from '../../context/pageContext';
const title = 'B mart';

export default function Header() {
  const pageDispatch = usePageDispatch();
  const pageState = usePageState();

  const searchHandler = () => {
    history.push('/search');
    pageDispatch!({
      type: 'PATHNAME_CHANGE',
      pathname: history.location.pathname,
    });
  };

  useEffect(() => {
    const setPathHandler = () => {
      pageDispatch!({
        type: 'PATHNAME_CHANGE',
        pathname: history.location.pathname,
      });
    };
    window.onpopstate = setPathHandler;
  }, [pageState]);

  const menuHandler = () => {
    history.push('/menu');
    pageDispatch!({
      type: 'PATHNAME_CHANGE',
      pathname: history.location.pathname,
    });
  };

  const mainHandler = () => {
    history.push('/');
    pageDispatch!({
      type: 'PATHNAME_CHANGE',
      pathname: history.location.pathname,
    });
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
        <StyledLogoH variant="h6" onClick={mainHandler}>
          {title}
        </StyledLogoH>
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
        <StyledLogoH variant="h6" onClick={mainHandler}>
          {title}
        </StyledLogoH>
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
        <StyledLogoH variant="h6" onClick={mainHandler}>
          {title}
        </StyledLogoH>
        <ButtonZone />
      </>
    );
  };

  const renderByPage = () => {
    switch (pageState.pathname) {
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
    pageDispatch!({
      type: 'PATHNAME_CHANGE',
      pathname: history.location.pathname,
    });
  };

  const renderBackSpace = () => {
    return (
      history.location.pathname !== '/' && (
        <StyledButton color="inherit" onClick={backSpaceHandler}>
          <ArrowBackIcon />
        </StyledButton>
      )
    );
  };

  return history.location.pathname !== '/search' ? (
    <div>
      <StyledAppBar>
        <StyledToolbar>
          <ButtonZone>{renderBackSpace()}</ButtonZone>

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
