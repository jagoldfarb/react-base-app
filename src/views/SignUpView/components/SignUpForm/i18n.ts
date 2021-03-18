import i18next from 'i18next';
import { locales } from 'configs/i18n';

i18next.addResources(locales.EN, 'SIGNUP_FORM', {
  AGREE_AND_ACCEPT: 'By creating an account, you agree and accept our',
  EMAIL: 'Email',
  FIRST_NAME: 'First name',
  LAST_NAME: 'Last name',
  PASSWORD: 'Password',
  PASSWORD_CONFIRMATION: 'Password confirmation',
  SUBMIT_BUTTON: 'Sign Up',
  TERMS_AND_CONDITIONS: 'Terms and Conditions',
});
