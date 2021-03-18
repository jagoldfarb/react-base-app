import * as userConstants from 'redux/constants/user.constants';
import history from 'helpers/history';

const redirectMiddleware = () => (next: any) => (action: any) => {
  const { type } = action;
  switch (type) {
    case userConstants.USER_ON_CONFIRM_ACCOUNT_SUCCEEDED:
      history.push('/dashboard');
      break;
    case userConstants.USER_ON_FORGOT_PASSWORD_SUCCEEDED:
    case userConstants.USER_ON_RESET_PASSWORD_SUCCEEDED:
      history.push('/login');
      break;
    case userConstants.USER_ON_CONFIRM_ACCOUNT_FAILED:
    case userConstants.USER_ON_LOGOUT_SUCCEEDED:
      history.push('/home');
      break;
    default:
      break;
  }
  return next(action);
};

export default redirectMiddleware;
