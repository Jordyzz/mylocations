import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import classNames from 'classnames';

import { useSelector } from '@redux/useSelector';
import { menuItems } from './menuItems';
import ActionBar from './ActionBar';
import styles from './AppBar.scss';
import Button from '@components/Button';
import { themeService } from '@core/ThemeService';
import Icon from '@components/Icon';

const AppBar = () => {
  const location = useLocation();
  const { selectedCategory } = useSelector(state => state.category);
  const { theme } = useSelector(state => state.config);

  return (
    <div className={styles.wrapper}>
      <div className={classNames(styles.title, 'ellipsis-overflow')}>
        {selectedCategory ? selectedCategory.name : 'Categories'}
      </div>
      <ActionBar category={selectedCategory} />
      <div className={styles.actionBar}>
        <div className={styles.routes}>
          {menuItems.map(item => (
            <NavLink
              key={item.label}
              to={item.route}
              className={classNames(
                styles.navLink,
                location.pathname.includes(item.route) && styles.activeLink
              )}>
              {item.label}
            </NavLink>
          ))}
        </div>
        <Button onClick={() => themeService.toggleTheme()} className={styles.themeBtn}>
          <Icon type={theme !== 'light' ? 'sun' : 'moon'} />
        </Button>
      </div>
    </div>
  );
};

export default AppBar;
