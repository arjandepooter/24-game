export const START_GAME = 'game/startGame';
export const ADD_INPUT = 'game/addInput';

export const startGame = numbers => ({
  type: START_GAME,
  payload: numbers,
});

export const addInput = input => ({
  type: ADD_INPUT,
  payload: input,
});
