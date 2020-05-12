import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import Button from 'components/Button/Button';
import MainTepmlate from 'views/Templates/MainTemplate';
import Notes from 'views/Templates/Notes';
import Twitter from 'views/Templates/Twitter';
import Article from 'views/Templates/Article';

const Root = () => (
  <MainTepmlate>
    <BrowserRouter>
      {/* <h1>Hello World!</h1>
      <Button>Close</Button>
      <Button secondary>Remove</Button> */}
      <Switch>
        <Route exact path="/" component={Notes} />
        <Route path="/twitter" component={Twitter} />
        <Route path="/article" component={Article} />
      </Switch>
    </BrowserRouter>
  </MainTepmlate>
);

export default Root;
