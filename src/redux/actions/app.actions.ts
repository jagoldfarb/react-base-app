import * as constants from 'redux/constants/app.constants';

export function onInitialize(): { type: string } {
  return { type: constants.APP_ON_INITIALIZE_REQUESTED };
}
