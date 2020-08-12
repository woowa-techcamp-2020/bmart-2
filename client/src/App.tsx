import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { GlobalStyle, theme } from './global.styles';
import { ThemeProvider } from 'styled-components';
import Container from '@material-ui/core/Container';

import Main from './pages/Main';
import Category from './pages/Category';
import Cart from './pages/Cart';
import Detail from './pages/Detail';
import Menu from './pages/Menu';
import Search from './pages/Search';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Container maxWidth="md">
          <BrowserRouter>
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
          </BrowserRouter>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
