import i18next from 'i18next';
import { locales } from 'configs/i18n';

i18next.addResources(locales.EN, 'HEADER', {
  LOGIN: 'Log In',
  LOGOUT: 'Log Out',
  SIGNUP: 'Sign Up',
});
