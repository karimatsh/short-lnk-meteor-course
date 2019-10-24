import { Meteor } from 'meteor/meteor';
import React from 'react';
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from 'react-router-dom';


import Signup from '../ui/Signup';
import Link from './../ui/Link';
import Notfound from './../ui/Notfound';
import Login from './../ui/Login';

export const history = createBrowserHistory();

const unauthenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/links'];

const onEnterPublicPages = () => {
  if (Meteor.userId()) {
    history.replace('/links');
  }
};

const onEnterPrivatePages = () => {
  if (!Meteor.userId()) {
    history.replace('/');
  }
};
export const onAuthChange = (isAuthenticated) => {
  const pathname = history.location.pathname;
  const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
  const isAuthenticatedPage = authenticatedPages.includes(pathname);

  if (isAuthenticated && isUnauthenticatedPage) {
    history.replace('/links');
  } else if (isAuthenticatedPage && !isAuthenticated ) {
    history.replace('/');
  }
}
export const routes = (
  <Router history={history}>
    <Switch>
      <Route exact path= "/" component= {Login} onEnter = {onEnterPublicPages}/>
      <Route exact path= "/signup" component= {Signup} onEnter = {onEnterPublicPages}/>
      <Route exact path= "/links" component= {Link} onEnter = {onEnterPrivatePages}/>
      <Route exact path= "*" component= {Notfound} onEnter = {onEnterPrivatePages}/>
    </Switch>
  </Router>
);