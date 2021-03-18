import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { onConfirmAccount } from 'redux/actions/user.actions';

import HomeContainer from 'containers/HomeContainer';
import ConfirmAccountView from 'views/ConfirmAccountView';
import Modal from 'components/commons/Modal';

const ConfirmAccountContainer = () => {
  const dispatch = useDispatch();
  const { token } = useParams<{ token: string }>();

  useEffect(() => {
    dispatch(onConfirmAccount(token));
  });

  return (
    <>
      <HomeContainer />
      <Modal disabled isOpen>
        <ConfirmAccountView />
      </Modal>
    </>
  );
};

export default ConfirmAccountContainer;
