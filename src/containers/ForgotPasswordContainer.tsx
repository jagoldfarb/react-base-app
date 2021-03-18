import React, { FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';

import { IForgotPasswordFormData } from 'views/ForgotPasswordView/types';
import history from 'helpers/history';
import { onForgotPassword } from 'redux/actions/user.actions';

import LoginContainer from 'containers/LoginContainer';
import ForgotPasswordView from 'views/ForgotPasswordView';
import Modal from 'components/commons/Modal';

const ForgotPasswordContainer: FunctionComponent = () => {
  const dispatch = useDispatch();

  const onClose = () => history.push('/login');

  const onSubmit = (formData: IForgotPasswordFormData) => dispatch(onForgotPassword(formData));

  return (
    <>
      <LoginContainer />
      <Modal isOpen onClose={onClose}>
        <ForgotPasswordView onSubmit={onSubmit} />
      </Modal>
    </>
  );
};

export default ForgotPasswordContainer;
