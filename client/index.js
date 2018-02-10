// This is the entry point for the app
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, Switch } from 'react-router-dom';
import history from './history';
import App from '../client/components/App.jsx';
import Profile from '../client/components/Profile.jsx';


render(
  <App />,
  document.getElementById("content")
);
