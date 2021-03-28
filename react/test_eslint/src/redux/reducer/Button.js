import { COUNT_UP, COUNT_DOWN } from '../actions';

const INITIAL_STATE = {
  name: 'Click to count',
  value: 0,
};

const Button = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case COUNT_UP:
      return {
        ...state,
        value: state.value + 1,
      };
    case COUNT_DOWN:
      return {
        ...state,
        value: state.value + 1,
      };
    default:
      return state;
  }
};

export default Button;
