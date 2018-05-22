import * as actionTypes from './authActions';

export const loginAction = user => ({
  type: actionTypes.LOGIN,
  result: user,
});

export const loadStart = () => ({
  type: actionTypes.LOAD_START,
});

export const loadEnd = () => ({
  type: actionTypes.LOAD_END,
});

export const throwError = error => ({
  type: actionTypes.ERROR,
  result: error,
});
