import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import classNames from 'classnames';

import { routesMap } from './routesMap';
import Button from '@components/Button';
import styles from './RouteBar.scss';

const RouteBar = () => {
  const location = useLocation();

  return (
    <div className={styles.wrapper}>
      {routesMap.map(route => (
        <NavLink key={route.label} to={route.route}>
          <Button
            className={classNames(
              styles.routeBtn,
              location.pathname.includes(route.route) && styles.routeActive
            )}>
            {route.label}
          </Button>
        </NavLink>
      ))}
    </div>
  );
};

export default RouteBar;
