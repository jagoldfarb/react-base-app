import { all, call, put, takeLatest } from 'redux-saga/effects';

import * as appConstants from 'redux/constants/app.constants';
import * as constants from 'redux/constants/user.constants';
import {
  confirmAccount,
  forgotPassword,
  initialize,
  login,
  logout,
  register,
  resetPassword,
  update,
} from 'services/user.services';

export function* userConfirmAccount(action: any) {
  try {
    const data = yield call(confirmAccount, action.token);
    yield put({ type: constants.USER_ON_CONFIRM_ACCOUNT_SUCCEEDED, data });
  } catch (error) {
    yield put({ type: constants.USER_ON_CONFIRM_ACCOUNT_FAILED, error });
  }
}

export function* userForgotPassword(action: any) {
  try {
    const data = yield call(forgotPassword, action.formData);
    yield put({ type: constants.USER_ON_FORGOT_PASSWORD_SUCCEEDED, data });
  } catch (error) {
    yield put({ type: constants.USER_ON_FORGOT_PASSWORD_FAILED, error });
  }
}

export function* userInitialize() {
  try {
    const data = yield call(initialize);
    yield put({ type: constants.USER_ON_INITIALIZE_SUCCEEDED, data });
  } catch (error) {
    yield put({ type: constants.USER_ON_INITIALIZE_FAILED, error });
  }
}

export function* userLogin(action: any) {
  try {
    const data = yield call(login, action.formData);
    yield put({ type: constants.USER_ON_LOGIN_SUCCEEDED, data });
  } catch (error) {
    yield put({ type: constants.USER_ON_LOGIN_FAILED, error });
  }
}

export function* userLogout() {
  try {
    yield call(logout);
    yield put({ type: constants.USER_ON_LOGOUT_SUCCEEDED });
  } catch (error) {
    yield put({ type: constants.USER_ON_LOGOUT_FAILED, error });
  }
}

export function* userRegister(action: any) {
  try {
    const data = yield call(register, action.formData);
    yield put({ type: constants.USER_ON_REGISTER_SUCCEEDED, data });
  } catch (error) {
    yield put({ type: constants.USER_ON_REGISTER_FAILED, error });
  }
}

export function* userResetPassword(action: any) {
  try {
    const data = yield call(resetPassword, action.formData);
    yield put({ type: constants.USER_ON_RESET_PASSWORD_SUCCEEDED, data });
  } catch (error) {
    yield put({ type: constants.USER_ON_RESET_PASSWORD_FAILED, error });
  }
}

export function* userUpdate(action: any) {
  try {
    const data = yield call(update, action.formData);
    yield put({ type: constants.USER_ON_UPDATE_SUCCEEDED, data });
  } catch (error) {
    yield put({ type: constants.USER_ON_UPDATE_FAILED, error });
  }
}

export function* watchUsers() {
  yield all([
    takeLatest(constants.USER_ON_CONFIRM_ACCOUNT_REQUESTED, userConfirmAccount),
    takeLatest(constants.USER_ON_FORGOT_PASSWORD_REQUESTED, userForgotPassword),
    takeLatest(appConstants.APP_ON_INITIALIZE_REQUESTED, userInitialize),
    takeLatest(constants.USER_ON_LOGIN_REQUESTED, userLogin),
    takeLatest(constants.USER_ON_LOGOUT_REQUESTED, userLogout),
    takeLatest(constants.USER_ON_REGISTER_REQUESTED, userRegister),
    takeLatest(constants.USER_ON_RESET_PASSWORD_REQUESTED, userResetPassword),
    takeLatest(constants.USER_ON_UPDATE_REQUESTED, userUpdate),
  ]);
}
