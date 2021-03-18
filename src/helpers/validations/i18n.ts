import i18next from 'i18next';
import { locales } from 'configs/i18n';

i18next.addResources(locales.EN, 'FIELDS', {
  DATE: 'Date',
  EMAIL: 'Email address',
  PASSWORD: 'Password',
  PHONE_NUMBER: 'Phone number',
});

i18next.addResources(locales.EN, 'VALIDATIONS', {
  FIELD_NOT_MATCH: '{{ field }} does not match',
  INVALID_FIELD: 'Invalid {{ field }}',
  INVALID_FIELD_LENGTH: '{{ field }} must be at least {{ length }} characters',
  INVALID_FIELD_SPECIAL_CHARACTERS:
    '{{ field }} require at least 1 uppercase character, numbers and symbol',
  REQUIRED_FIELD: 'Required',
});
