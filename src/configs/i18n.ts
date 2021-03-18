import i18next from 'i18next';

export const locales = {
  EN: 'en-US',
};

const DEFAULT_LOCALE = locales.EN;

i18next.init({
  initImmediate: false,
  fallbackLng: DEFAULT_LOCALE,
  lng: DEFAULT_LOCALE,
});
