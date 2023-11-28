import i18n from 'i18next';
import AsyncStoragePlugin from 'i18next-react-native-async-storage';
import fr from './languages/fr.json';
import ar from './languages/ar.json';

i18n.use(AsyncStoragePlugin()).init({
  compatibilityJSON: 'v3',
  lng: 'ar',
  fallbackLng: 'ar',
  resources: {
    fr: fr,
    ar: ar,
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
