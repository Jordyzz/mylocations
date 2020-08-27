import React from 'react';
import { Router } from 'react-router';
import { Switch, Route, Redirect } from 'react-router-dom';

import history from '@core/history';
import MainPage from '@pages/MainPage';
import AppBar from '@components/AppBar';
import styles from './App.scss';
import CreateCategoryPage from '@pages/CreateCategoryPage';
import CategoryPreviewPage from '@pages/CategoryPreviewPage';
import RouteBar from '@components/RouteBar';
import LocationsPage from '@pages/LocationsPage';
import CreateLocationPage from '@pages/CreateLocationPage';
import LocationPreviewPage from '@pages/LocationPreviewPage';

function App() {
  return (
    <Router history={history}>
      <div className={styles.wrapper}>
        <AppBar />
        <div className={styles.content}>
          <Switch>
            <Route exact path="/categories/create" component={CreateCategoryPage} />
            <Route path="/categories/create/:name" component={CreateCategoryPage} />
            <Route path="/categories/:name" component={CategoryPreviewPage} />
            <Route exact path="/categories" component={MainPage} />
            <Route exact path="/locations/create" component={CreateLocationPage} />
            <Route path="/locations/:name" component={LocationPreviewPage} />
            <Route exact path="/locations" component={LocationsPage} />
            <Redirect to="/categories" />
          </Switch>
        </div>
        <RouteBar />
      </div>
    </Router>
  );
}

export default App;
