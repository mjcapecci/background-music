import { SET_AUTH_USER } from '../actions/types';

const initialState = {
  user: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_AUTH_USER:
      return {
        ...state,
        user: payload,
      };
    default:
      return state;
  }
}
