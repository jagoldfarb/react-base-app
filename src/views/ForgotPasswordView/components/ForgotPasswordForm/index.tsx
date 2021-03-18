import React, { FunctionComponent } from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import i18next from 'i18next';

import { IForgotPasswordFormData } from 'views/ForgotPasswordView/types';
import { emailValidation, requiredValidation } from 'helpers/validations';

import Input from 'components/inputs/Input';
import Button from 'components/commons/Button';

import { IForgotPasswordFormProps } from './types';
import { Form, ButtonContainer } from './styles';
import './i18n';

const ForgotPasswordForm: FunctionComponent<
  IForgotPasswordFormProps & InjectedFormProps<IForgotPasswordFormData, IForgotPasswordFormProps>
> = (props) => {
  const { handleSubmit, onSubmit, submitting } = props;

  return (
    <Form onSubmit={handleSubmit(onSubmit)} data-testid="forgot-password-form">
      <Field
        component={Input}
        label={i18next.t('FORGOT_PASSWORD_FORM:EMAIL')}
        name="email"
        validate={[requiredValidation, emailValidation]}
        type="email"
      />
      <ButtonContainer>
        <Button disabled={submitting} type="submit">
          {i18next.t('FORGOT_PASSWORD_FORM:SUBMIT_BUTTON')}
        </Button>
      </ButtonContainer>
    </Form>
  );
};

export default reduxForm<IForgotPasswordFormData, IForgotPasswordFormProps>({
  form: 'forgotPassword',
})(ForgotPasswordForm);
