import { TEST_TYPE } from '../actions/types';

const initialState = {
  test: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    default:
      return state;
  }
}
