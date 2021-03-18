import { createSelector } from 'reselect';

const getUser = (state: any) => state.user.data;

export const userSelector = createSelector([getUser], (user) => user);
