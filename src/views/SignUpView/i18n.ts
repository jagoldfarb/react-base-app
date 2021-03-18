import i18next from 'i18next';
import { locales } from 'configs/i18n';

i18next.addResources(locales.EN, 'SIGNUP_VIEW', {
  ALREADY_HAVE_ACCOUNT: 'Already have an account?',
  LOGIN: 'Log In',
  SIGNUP: 'Sign Up',
});
