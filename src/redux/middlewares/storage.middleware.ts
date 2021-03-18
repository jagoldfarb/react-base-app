import * as constants from 'redux/constants/user.constants';
import { setCookie, removeCookie } from 'helpers/cookies';

const storageMiddleware = () => (next: any) => (action: any) => {
  const { data, type } = action;
  switch (type) {
    case constants.USER_ON_CONFIRM_ACCOUNT_SUCCEEDED:
    case constants.USER_ON_LOGIN_SUCCEEDED:
      setCookie('accessToken', data.token.accessToken, {
        path: '/',
        maxAge: data.token.expiresIn,
      });
      break;
    case constants.USER_ON_LOGOUT_REQUESTED:
    case constants.USER_ON_INITIALIZE_FAILED:
      removeCookie('accessToken');
      break;
    default:
      break;
  }
  return next(action);
};

export default storageMiddleware;
