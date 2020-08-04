import React, { useState, useEffect } from 'react';
import { Provider as ReduxProvider } from 'react-redux';

import store from '@redux/store';
import App from './App';
import { themeService } from '@core/ThemeService';
import { categoryService } from '@core/CategoryService';

function Root() {
  const [showApp, setShowApp] = useState(false);

  useEffect(() => {
    Promise.all([categoryService.initCategories(), themeService.init()]).then(() => {
      setShowApp(true);
    });
  }, []);

  if (!showApp) {
    return null;
  }

  return (
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  );
}

export default Root;
