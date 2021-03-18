import i18next from 'i18next';
import { locales } from 'configs/i18n';

i18next.addResources(locales.EN, 'LOGIN_FORM', {
  EMAIL: 'Email',
  FORGOT_PASSWORD: 'Forgot your password?',
  PASSWORD: 'Password',
  SUBMIT_BUTTON: 'Log In',
});
