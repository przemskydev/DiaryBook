import React from 'react';
import { ThemeProvider } from 'styled-components';
import Button from 'components/Button/Button';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';

const Root = () => (
  <div>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <h1>Hello World!</h1>
      <Button>Close</Button>
      <Button secondary>Remove</Button>
    </ThemeProvider>
  </div>
);

export default Root;
