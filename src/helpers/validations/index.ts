import i18next from 'i18next';

import {
  EMAIL_REGEX,
  PASSWORD_REGEX,
  PASSWORD_MINIMUM_LENGTH,
  PHONE_NUMBER_REGEX,
} from './constants';
import './i18n';

export function requiredValidation(value: string): undefined | string {
  return value ? undefined : i18next.t('VALIDATIONS:REQUIRED_FIELD');
}

export function emailValidation(value: string): undefined | string {
  return !!value && !EMAIL_REGEX.test(value)
    ? i18next.t('VALIDATIONS:INVALID_FIELD', {
        field: i18next.t('FIELDS:EMAIL').toLocaleLowerCase(),
      })
    : undefined;
}

export function passwordValidation(value: string): undefined | string {
  if (!!value && value.length < PASSWORD_MINIMUM_LENGTH) {
    return i18next.t('VALIDATIONS:INVALID_FIELD_LENGTH', {
      field: i18next.t('FIELDS:PASSWORD'),
      length: PASSWORD_MINIMUM_LENGTH,
    });
  }

  return !PASSWORD_REGEX.test(value)
    ? i18next.t('VALIDATIONS:INVALID_FIELD_SPECIAL_CHARACTERS', {
        field: i18next.t('FIELDS:PASSWORD'),
      })
    : undefined;
}

export function passwordConfirmationValidation(
  value: string,
  allValues: {
    password?: string;
    passwordConfirmation?: string;
  },
): undefined | string {
  if (value !== allValues.password) {
    return i18next.t('VALIDATIONS:FIELD_NOT_MATCH', {
      field: i18next.t('FIELDS:PASSWORD'),
    });
  }
  return passwordValidation(value);
}

export function dateValidation(value: string): undefined | string {
  return !!value && new Date(value) >= new Date()
    ? i18next.t('VALIDATIONS:INVALID_FIELD', {
        field: i18next.t('FIELDS:DATE').toLocaleLowerCase(),
      })
    : undefined;
}

export function phoneNumberValidation(value: string): undefined | string {
  return !!value && !PHONE_NUMBER_REGEX.test(value)
    ? i18next.t('VALIDATIONS:INVALID_FIELD', {
        field: i18next.t('FIELDS:PHONE_NUMBER').toLocaleLowerCase(),
      })
    : undefined;
}
