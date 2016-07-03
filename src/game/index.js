import { evaluateSync as evaluate } from 'bet';

export const PLUS = '+';
export const MINUS = '-';
export const MULTIPLY = '\u00d7';
export const DIVIDE = '\u00f7';
export const BRACKET_OPEN = '(';
export const BRACKET_CLOSE = ')';
export const operators = [PLUS, MINUS, MULTIPLY, DIVIDE, BRACKET_OPEN, BRACKET_CLOSE];

const mapping = {
  [MULTIPLY]: '*',
  [DIVIDE]: '/',
};

export const isInputValid = (input, needed = 24) => {
  if (input.length === 0) {
    return false;
  }

  const tokens = input.map(token => mapping[token] || token);

  let result;
  try {
    result = evaluate(tokens);
  } catch (e) {
    return false;
  }

  return (
    input.filter(token => typeof token === 'number').length === 4
    && needed === result
  );
};


export const generateNumbers = () => (
  [...Array(4)].map(() => Math.floor(Math.random() * (9 - 1)) + 1)
);
