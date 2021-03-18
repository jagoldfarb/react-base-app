import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { IResetPasswordFormData } from 'views/ResetPasswordView/types';
import history from 'helpers/history';
import { onResetPassword } from 'redux/actions/user.actions';

import LoginContainer from 'containers/LoginContainer';
import ResetPasswordView from 'views/ResetPasswordView';
import Modal from 'components/commons/Modal';

const ResetPasswordContainer = () => {
  const dispatch = useDispatch();
  const { token } = useParams<{ token: string }>();

  const onClose = () => history.push('/login');

  const onSubmit = (formData: IResetPasswordFormData) =>
    dispatch(onResetPassword({ ...formData, token }));

  return (
    <>
      <LoginContainer />
      <Modal isOpen onClose={onClose}>
        <ResetPasswordView onSubmit={onSubmit} />
      </Modal>
    </>
  );
};

export default ResetPasswordContainer;
