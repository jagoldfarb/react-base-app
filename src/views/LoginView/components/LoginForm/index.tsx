import React, { FunctionComponent } from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import i18next from 'i18next';

import { ILoginFormData } from 'views/LoginView/types';
import { emailValidation, requiredValidation } from 'helpers/validations';

import Input from 'components/inputs/Input';
import Button from 'components/commons/Button';

import { ILoginFormProps } from './types';
import { Form, ForgotPasswordContainer, ForgotPasswordLink, ButtonContainer } from './styles';
import './i18n';

const LoginForm: FunctionComponent<
  ILoginFormProps & InjectedFormProps<ILoginFormData, ILoginFormProps>
> = (props) => {
  const { handleSubmit, onSubmit, submitting } = props;

  return (
    <Form onSubmit={handleSubmit(onSubmit)} data-testid="login-form">
      <Field
        component={Input}
        label={i18next.t('LOGIN_FORM:EMAIL')}
        name="email"
        validate={[requiredValidation, emailValidation]}
        type="email"
      />
      <Field
        component={Input}
        label={i18next.t('LOGIN_FORM:PASSWORD')}
        name="password"
        validate={[requiredValidation]}
        type="password"
      />
      <ForgotPasswordContainer>
        <ForgotPasswordLink to="/forgot-password">
          {i18next.t('LOGIN_FORM:FORGOT_PASSWORD')}
        </ForgotPasswordLink>
      </ForgotPasswordContainer>
      <ButtonContainer>
        <Button disabled={submitting} type="submit">
          {i18next.t('LOGIN_FORM:SUBMIT_BUTTON')}
        </Button>
      </ButtonContainer>
    </Form>
  );
};

export default reduxForm<ILoginFormData, ILoginFormProps>({
  form: 'login',
})(LoginForm);
