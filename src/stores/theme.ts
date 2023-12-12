import {create} from 'zustand';
import {storeTheme} from './presisting-helpers/theme';

type State = {
  currentTheme: 'light' | 'dark';
};

type Action = {
  toggleTheme: () => void;
};

export const useThemeStore = create<State & Action>(set => ({
  currentTheme: 'light',
  toggleTheme: () =>
    set(state => {
      if (state.currentTheme === 'light') {
        storeTheme('dark');
        return {currentTheme: 'dark'};
      } else {
        storeTheme('light');
        return {currentTheme: 'light'};
      }
    }),
}));
