import React, { useEffect } from 'react';
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
import { useCategoryDispatch, TCategoryState } from './context/categoryContext';
import category from './apis';

function App() {
  const dispatch = useCategoryDispatch();
  useEffect(() => {
    const fetchCategory = async () => {
      const res = await category.get('/category?sub=true');
      dispatch!({ type: 'INIT', payload: res?.data as TCategoryState });
    };
    fetchCategory();
  }, [dispatch]);
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header title="B mart" page="main" />
        <Toolbar />
        <Container maxWidth="md">
          <Router history={history}>
            <Switch>
              <Route path="/" exact component={Main} />
              <Route path="/cart" exact component={Cart} />
              <Route path="/category" exact component={Category} />
              <Route path="/detail" exact component={Detail} />
              <Route path="/menu" exact component={Menu} />
              <Route path="/search" exact component={Search} />
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
