import React, { FunctionComponent } from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import i18next from 'i18next';

import { IResetPasswordFormData } from 'views/ResetPasswordView/types';
import {
  requiredValidation,
  passwordValidation,
  passwordConfirmationValidation,
} from 'helpers/validations';

import Input from 'components/inputs/Input';
import Button from 'components/commons/Button';

import { IResetPasswordFormProps } from './types';
import { Form, InputContainer, ButtonContainer } from './styles';
import './i18n';

const ResetPasswordForm: FunctionComponent<
  IResetPasswordFormProps & InjectedFormProps<IResetPasswordFormData, IResetPasswordFormProps>
> = (props) => {
  const { handleSubmit, onSubmit, submitting } = props;

  return (
    <Form onSubmit={handleSubmit(onSubmit)} data-testid="reset-password-form">
      <InputContainer>
        <Field
          component={Input}
          label={i18next.t('RESET_PASSWORD_FORM:PASSWORD')}
          name="password"
          validate={[requiredValidation, passwordValidation]}
          type="password"
        />
      </InputContainer>
      <InputContainer>
        <Field
          component={Input}
          label={i18next.t('RESET_PASSWORD_FORM:PASSWORD_CONFIRMATION')}
          name="passwordConfirmation"
          validate={[requiredValidation, passwordConfirmationValidation]}
          type="password"
        />
      </InputContainer>
      <ButtonContainer>
        <Button disabled={submitting} type="submit">
          {i18next.t('RESET_PASSWORD_FORM:SUBMIT_BUTTON')}
        </Button>
      </ButtonContainer>
    </Form>
  );
};

export default reduxForm<IResetPasswordFormData, IResetPasswordFormProps>({
  form: 'ResetPassword',
})(ResetPasswordForm);
