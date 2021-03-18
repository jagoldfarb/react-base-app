import React, { FunctionComponent } from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import i18next from 'i18next';

import { ISignUpFormData } from 'views/SignUpView/types';
import {
  requiredValidation,
  emailValidation,
  passwordConfirmationValidation,
  passwordValidation,
} from 'helpers/validations';

import Input from 'components/inputs/Input';
import Button from 'components/commons/Button';

import { ISignUpFormProps } from './types';
import {
  Form,
  TermsAndConditionsContainer,
  TermsAndConditionsLink,
  ButtonContainer,
} from './styles';
import './i18n';

const SignUpForm: FunctionComponent<
  ISignUpFormProps & InjectedFormProps<ISignUpFormData, ISignUpFormProps>
> = (props) => {
  const { handleSubmit, onSubmit, submitting } = props;

  return (
    <Form onSubmit={handleSubmit(onSubmit)} data-testid="signup-form">
      <Field
        component={Input}
        label={i18next.t('SIGNUP_FORM:FIRST_NAME')}
        name="firstName"
        validate={[requiredValidation]}
      />
      <Field
        component={Input}
        label={i18next.t('SIGNUP_FORM:LAST_NAME')}
        name="lastName"
        validate={[requiredValidation]}
      />
      <Field
        component={Input}
        label={i18next.t('SIGNUP_FORM:EMAIL')}
        name="email"
        validate={[requiredValidation, emailValidation]}
        type="email"
      />
      <Field
        component={Input}
        label={i18next.t('SIGNUP_FORM:PASSWORD')}
        name="password"
        validate={[requiredValidation, passwordValidation]}
        type="password"
      />
      <Field
        component={Input}
        label={i18next.t('SIGNUP_FORM:PASSWORD_CONFIRMATION')}
        name="passwordConfirmation"
        validate={[requiredValidation, passwordConfirmationValidation]}
        type="password"
      />
      <TermsAndConditionsContainer>
        {i18next.t('SIGNUP_FORM:AGREE_AND_ACCEPT')}
        <TermsAndConditionsLink to="/terms-and-conditions">
          {i18next.t('SIGNUP_FORM:TERMS_AND_CONDITIONS')}
        </TermsAndConditionsLink>
      </TermsAndConditionsContainer>
      <ButtonContainer>
        <Button disabled={submitting} type="submit">
          {i18next.t('SIGNUP_FORM:SUBMIT_BUTTON')}
        </Button>
      </ButtonContainer>
    </Form>
  );
};

export default reduxForm<ISignUpFormData, ISignUpFormProps>({
  form: 'signup',
})(SignUpForm);
