import { createGlobalStyle } from 'styled-components';

interface BMartTheme {
  colors: {
    main: string;
    background: string;
  };
  border: {
    bigRadius: string;
    radius: string;
  };
  font: {
    default: string;
    subTitle: string;
  };
  shadow: string;
  dropShadow: string;
}

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends BMartTheme {}
}

const theme: BMartTheme = {
  colors: {
    main: '#e95157',
    background: '#ffebee',
  },
  border: {
    bigRadius: '16px',
    radius: '12px',
  },
  font: {
    default: '1.05rem',
    subTitle: '1.2rem',
  },
  shadow: '0px 4px 4px 1px rgba(0, 0, 0, 0.1)',
  dropShadow: '0px 3px 3px rgba(100, 100, 100, 0.25)',
};

const GlobalStyle = createGlobalStyle`
a,
h1,
h2,
h3,
h4,
h5,
h6,
p,
li,
ul,
body,
td,
th,
tr,
span,
label,
fieldset,
button {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a,
h1,
h2,
h3,
h4,
h5,
h6,
strong,
label,
div,
button {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
    sans-serif, Apple Color Emoji, Segoe UI Emoji;
  color: #444;
}
form,
fieldset {
  border: 0;
}
button {
  background-color: #fff;
  border: 0;
}
table {
  table-layout: fixed;
  border-collapse: collapse;
}
ul {
  list-style: none;
}
em {
  font-style: normal;
}
html, body , .root{
  width: 100%;
  height: 100%;
  position: relative;
}
html {
  @media only screen and (max-width: 600px ) {
    font-size: 15px;
  }
  @media screen and (min-width: 600px ) and (max-width: 960px) {
    font-size: 16px;
  }
  @media (min-width: 960px ){
    font-size: 18px;
  }
}
body{
 /* Disables pull-to-refresh but allows overscroll glow effects. */
 overscroll-behavior-y: none;
}`;

export { theme, GlobalStyle };
