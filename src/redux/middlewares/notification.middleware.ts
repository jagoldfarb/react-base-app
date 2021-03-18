import * as userConstants from 'redux/constants/user.constants';
import { sendErrorNotification, sendSuccessNotification } from 'helpers/notifications';

const notificationMiddleware = () => (next: any) => (action: any) => {
  const { data, error, type } = action;
  switch (type) {
    case userConstants.USER_ON_CONFIRM_ACCOUNT_FAILED:
    case userConstants.USER_ON_FORGOT_PASSWORD_FAILED:
    case userConstants.USER_ON_LOGIN_FAILED:
    case userConstants.USER_ON_LOGOUT_FAILED:
    case userConstants.USER_ON_REGISTER_FAILED:
    case userConstants.USER_ON_RESET_PASSWORD_FAILED:
    case userConstants.USER_ON_UPDATE_FAILED:
      sendErrorNotification(error.message);
      break;
    case userConstants.USER_ON_CONFIRM_ACCOUNT_SUCCEEDED:
    case userConstants.USER_ON_FORGOT_PASSWORD_SUCCEEDED:
    case userConstants.USER_ON_REGISTER_SUCCEEDED:
    case userConstants.USER_ON_RESET_PASSWORD_SUCCEEDED:
    case userConstants.USER_ON_UPDATE_SUCCEEDED:
      sendSuccessNotification(data.message);
      break;
    default:
      break;
  }
  return next(action);
};

export default notificationMiddleware;
