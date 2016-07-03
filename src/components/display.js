import React from 'react';
import classNames from 'classnames';

const Display = ({ input, isValid }) => {
  const classes = {
    'c-display': true,
    'is-valid': isValid,
  };

  return (
    <div className={classNames(classes)}>&nbsp;{input.join(' ')}</div>
  );
};

export default Display;
