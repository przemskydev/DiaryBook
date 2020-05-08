import React from 'react';
import Button from 'components/Button/Button';
import GlobalStyle from 'theme/GlobalStyle';

const Root = () => (
  <div>
    <GlobalStyle />
    <h1>Hello World!</h1>
    <Button>Close</Button>
    <Button secondary>Remove</Button>
  </div>
);

export default Root;
