import { START_GAME, ADD_INPUT } from '../actions';

const initialState = {
  numbers: [2, 3, 4, 1],
  input: [],
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_GAME:
      return {
        numbers: action.payload,
        input: [],
      };
    case ADD_INPUT:
      return Object.assign({}, state, {
        input: state.input.concat([action.payload]),
      });
    default:
      return state;
  }
};

export default gameReducer;
