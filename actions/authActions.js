import { SET_AUTH_USER } from './types';

export const setAuthStatus = (user) => (dispatch) => {
  dispatch({
    type: SET_AUTH_USER,
    payload: user,
  });
};
