import i18next from 'i18next';
import {create} from 'zustand';

type State = {
  currentLang: string;
};

type Action = {
  toggleLang: () => void;
};

export const useLangStore = create<State & Action>(set => ({
  currentLang: i18next.language,
  toggleLang: () =>
    set(state => {
      if (state.currentLang === 'ar') {
        i18next.changeLanguage('fr', lng => (state.currentLang = lng));
        return {currentLang: i18next.language};
      } else {
        i18next.changeLanguage('ar', lng => (state.currentLang = lng));
        return {currentLang: i18next.language};
      }
    }),
}));
