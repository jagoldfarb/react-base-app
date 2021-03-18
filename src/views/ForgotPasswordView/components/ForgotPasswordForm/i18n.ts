import i18next from 'i18next';
import { locales } from 'configs/i18n';

i18next.addResources(locales.EN, 'FORGOT_PASSWORD_FORM', {
  EMAIL: 'Email',
  SUBMIT_BUTTON: 'Reset my password',
});
