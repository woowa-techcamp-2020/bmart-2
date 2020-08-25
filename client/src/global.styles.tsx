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
  dropShadow: string;
}

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
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
  position: relative;
}

body{
 /* Disables pull-to-refresh but allows overscroll glow effects. */
 overscroll-behavior-y: none;
}
`;

export { theme, GlobalStyle };
