import { getState, dispatch } from '@redux/store';
import { setTheme } from '@src/redux/config';
import { storageService } from './StorageService';

class ThemeService {
  private themes = {
    light: {
      backgroundColor: '#f6f6f8',
      backgroundSecondaryColor: '#fff',
      fontColor: '#000',
      fontSecondaryColor: '#d3d3d3',
      selectedFontColor: '#ffc53d'
    },
    dark: {
      backgroundColor: '#1c1c21',
      backgroundSecondaryColor: '#2d2d2e',
      fontColor: '#fff',
      fontSecondaryColor: '#d3d3d3',
      selectedFontColor: '#ffc53d'
    }
  };

  public vars = {
    backgroundColor: undefined,
    backgroundSecondaryColor: undefined,
    fontColor: undefined,
    selectedFontColor: undefined,
    borderColor: undefined
  };

  init(theme?: string) {
    const selectedTheme = theme || storageService.get('theme');
    Object.assign(this.vars, selectedTheme ? this.themes[selectedTheme] : this.themes.light);
    for (let key in this.vars) {
      this.setVariable(key, this.vars[key]);
    }

    dispatch(setTheme(selectedTheme || 'light'));
  }

  toggleTheme() {
    const activeTheme = getState().config.theme;
    const newTheme = activeTheme === 'light' ? 'dark' : 'light';
    this.init(newTheme);
    storageService.set('theme', newTheme);
  }

  private setVariable(key: string, value: string) {
    document.documentElement.style.setProperty(`--${key}`, value);
  }
}

export const themeService = new ThemeService();
