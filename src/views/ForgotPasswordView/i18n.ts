import i18next from 'i18next';
import { locales } from 'configs/i18n';

i18next.addResources(locales.EN, 'FORGOT_PASSWORD_VIEW', {
  CREATE_ACCOUNT: 'Create account',
  DESCRIPTION: 'Enter your email address to reset password.',
  TITLE: 'Forgot password',
});
