import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'store';
import MainTepmlate from 'views/Templates/MainTemplate';
import DetailPage from 'views/pages/DetailPage';
import Notes from 'views/pages/Notes';
import Twitter from 'views/pages/Twitter';
import Article from 'views/pages/Article';
import LoginPage from 'views/pages/LoginPage';
import { routes } from 'routes';

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainTepmlate>
        <Switch>
          <Route exact path={routes.login} component={LoginPage} />

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
  </Provider>
);

export default Root;
