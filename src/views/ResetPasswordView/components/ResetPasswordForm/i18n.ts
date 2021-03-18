import i18next from 'i18next';
import { locales } from 'configs/i18n';

i18next.addResources(locales.EN, 'RESET_PASSWORD_FORM', {
  PASSWORD: 'Password',
  PASSWORD_CONFIRMATION: 'Password confirmation',
  SUBMIT_BUTTON: 'Change password',
});
