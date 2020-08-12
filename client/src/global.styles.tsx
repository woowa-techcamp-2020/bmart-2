import { createGlobalStyle } from 'styled-components';

interface BMartTheme {
  colors: {
    main: string;
    background: string;
  };
  border: {
    radius: string;
  };
  shadow: string;
}

declare module 'styled-components' {
  export interface DefaultTheme extends BMartTheme {}
}

const theme: BMartTheme = {
  colors: {
    main: '#ef5350',
    background: '#ffebee',
  },
  border: {
    radius: '10px',
  },
  shadow: '0px 0px 6px 2px rgba(0, 0, 0, 0.065)',
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
span,
h1,
h2,
h3,
h4,
h5,
h6,
span,
strong,
label,
div,
button {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
    sans-serif, Apple Color Emoji, Segoe UI Emoji;
  color: #444;
  font-size: 14px;
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
html, body {
  width: 100%;
  height: 100%;
}
`;

export { theme, GlobalStyle };