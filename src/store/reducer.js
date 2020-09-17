import * as constants from './constants';

const defaultState = {
  eval: '',
  result: ''
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_EVAL:
      return {
        ...state, eval: action.data
      };
    case constants.CHANGE_REASULT:
      return {
        ...state, result: action.data
      };
    default:
      return state;
  }
}