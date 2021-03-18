import React, { FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';

import { ISignUpFormData } from 'views/SignUpView/types';
import { onRegister } from 'redux/actions/user.actions';

import LayoutContainer from 'containers/LayoutContainer';
import SignUpView from 'views/SignUpView';

const SignUpContainer: FunctionComponent = () => {
  const dispatch = useDispatch();

  const onSubmit = (formData: ISignUpFormData) => dispatch(onRegister(formData));

  return (
    <LayoutContainer>
      <SignUpView onSubmit={onSubmit} />
    </LayoutContainer>
  );
};

export default SignUpContainer;
