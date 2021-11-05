import React from 'react';
import MainLayout from './layouts/MainLayout';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
import { fallback } from './routes';

import 'assets/css/App.css';
import 'assets/css/Article.css';
import 'assets/css/Paginations.css';
import 'assets/css/Nav.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="" render={(props) => <MainLayout {...props} />} />
        <Redirect from="*" to={fallback} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
