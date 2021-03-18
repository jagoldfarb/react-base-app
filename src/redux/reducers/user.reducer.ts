import { FunctionComponent } from 'react';

import { IUserDefaultState } from 'types/user.types';
import * as constants from 'redux/constants/user.constants';

const defaultState: IUserDefaultState = {
  data: null,
  loading: false,
};

const userReducer: FunctionComponent<any> = (state = defaultState, action: any) => {
  const { data, type } = action;
  switch (type) {
    case constants.USER_ON_LOGIN_REQUESTED:
    case constants.USER_ON_REGISTER_REQUESTED:
    case constants.USER_ON_UPDATE_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case constants.USER_ON_CONFIRM_ACCOUNT_SUCCEEDED:
    case constants.USER_ON_INITIALIZE_SUCCEEDED:
    case constants.USER_ON_LOGIN_SUCCEEDED:
    case constants.USER_ON_REGISTER_SUCCEEDED:
    case constants.USER_ON_UPDATE_SUCCEEDED:
      return {
        ...state,
        data: data.user,
        loading: false,
      };
    case constants.USER_ON_LOGIN_FAILED:
    case constants.USER_ON_REGISTER_FAILED:
    case constants.USER_ON_UPDATE_FAILED:
      return {
        ...state,
        loading: false,
      };
    case constants.USER_ON_LOGOUT_SUCCEEDED:
      return defaultState;
    case constants.USER_ON_CONFIRM_ACCOUNT_FAILED:
    case constants.USER_ON_INITIALIZE_FAILED:
    case constants.USER_ON_LOGOUT_FAILED:
    default:
      return state;
  }
};

export default userReducer;
