import React, { useEffect, useState } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import { GlobalStyle, theme } from './global.styles';

import history from './history';
import Header from './components/Header';
import Main from './pages/Main';
import Category from './pages/Category';
import Cart from './pages/Cart';
import Detail from './pages/Detail';
import Menu from './pages/Menu';
import Search from './pages/Search';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Dib from './pages/Dib';
import { useCategoryDispatch, TCategoryState } from './context/categoryContext';
import { useCartDispatch, TCartState, getCarts } from './context/cartContext';
import api from './apis';
import { getDibs } from './apis/dib';
import SearchResult from './pages/SearchResult';

function App() {
  const [path, setPath] = useState(history.location.pathname);
  const dispatch = useCategoryDispatch();
  const cartDispatch = useCartDispatch();
  useEffect(() => {
    const fetchInitData = async () => {
      const res = await api.get('/category?sub=true');
      dispatch!({ type: 'INIT', payload: res?.data as TCategoryState });
      // dib추가
      // const dibs = await getDibs();
      // dispatch!({ type: 'INIT', payload: dibs });
    };

    fetchInitData();
  }, [dispatch]);

  useEffect(() => {
    const fetchInitData = async () => {
      const carts = await getCarts(cartDispatch);
    };

    fetchInitData();
  }, [dispatch]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Container maxWidth="md">
          <Router history={history}>
            <Header path={path} setPath={setPath} />
            <Switch>
              <Route path="/" exact component={Main} />
              <Route path="/cart" exact component={Cart} />
              <Route path="/category" exact component={Category} />
              <Route path="/detail" exact component={Detail} />
              <Route path="/result" exact component={SearchResult} />
              <Route path="/menu" exact component={Menu} />
              <Route path="/dib" exact component={Dib} />
              <Route
                path="/search"
                exact
                component={() => <Search setPath={setPath} />}
              />
              <Route path="/signin" exact component={Signin} />
              <Route path="/signup" exact component={Signup} />
            </Switch>
          </Router>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
