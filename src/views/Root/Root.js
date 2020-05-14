import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
// import Button from 'components/Button/Button';
import MainTepmlate from 'views/pages/MainTemplate';
import DetailPage from 'views/pages/DetailPage';
import Notes from 'views/Templates/Notes';
import Twitter from 'views/Templates/Twitter';
import Article from 'views/Templates/Article';
import { routes } from 'routes';

const Root = () => (
  <BrowserRouter>
    <MainTepmlate>
      <Switch>
        <Route exact path={routes.home} render={() => <Redirect to="/notes" />} />

        <Route exact path={routes.notes} component={Notes} />
        <Route path={routes.note} component={DetailPage} />

        <Route exact path={routes.twitters} component={Twitter} />
        <Route path={routes.twitter} component={DetailPage} />

        <Route exact path={routes.articles} component={Article} />
        <Route path={routes.article} component={DetailPage} />
      </Switch>
    </MainTepmlate>
  </BrowserRouter>
);

export default Root;
