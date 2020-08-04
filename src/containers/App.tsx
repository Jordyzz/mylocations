import React from 'react';
import { Router } from 'react-router';
import { Switch, Route, Redirect } from 'react-router-dom';

import history from '@core/history';
import MainPage from '@pages/MainPage';
import AppBar from '@components/AppBar';
import styles from './App.scss';
import CreateCategoryPage from '@pages/CreateCategoryPage';
import CategoryPreviewPage from '@pages/CategoryPreviewPage';

function App() {
  return (
    <Router history={history}>
      <div className={styles.wrapper}>
        <AppBar />
        <div className={styles.content}>
          <Switch>
            <Route path="/categories" component={MainPage} />
            <Route path="/create" component={CreateCategoryPage} />
            <Route path="/create/:name" component={CreateCategoryPage} />
            <Route path="/category/:name" component={CategoryPreviewPage} />
            <Redirect to="/categories" />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
