import * as constants from 'redux/constants/user.constants';

export function onConfirmAccount(token: string): { type: string; token: string } {
  return {
    type: constants.USER_ON_CONFIRM_ACCOUNT_REQUESTED,
    token,
  };
}

export function onForgotPassword(formData: any): { type: string; formData: any } {
  return {
    type: constants.USER_ON_FORGOT_PASSWORD_REQUESTED,
    formData,
  };
}

export function onLogin(formData: any): { type: string; formData: any } {
  return {
    type: constants.USER_ON_LOGIN_REQUESTED,
    formData,
  };
}

export function onLogout(): { type: string } {
  return { type: constants.USER_ON_LOGOUT_REQUESTED };
}

export function onRegister(formData: any): { type: string; formData: any } {
  return {
    type: constants.USER_ON_REGISTER_REQUESTED,
    formData,
  };
}

export function onResetPassword(formData: any): { type: string; formData: any } {
  return {
    type: constants.USER_ON_RESET_PASSWORD_REQUESTED,
    formData,
  };
}

export function onUpdate(formData: any): { type: string; formData: any } {
  return {
    type: constants.USER_ON_UPDATE_REQUESTED,
    formData,
  };
}
