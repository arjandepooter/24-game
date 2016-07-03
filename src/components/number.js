import React from 'react';
import classNames from 'classnames';

const Number = ({ number, onClick, isEnabled }) => {
  const classes = {
    'c-number': true,
    'c-control': true,
    'is-disabled': !isEnabled,
  };

  return (
    <div
      className={classNames(classes)}
      onClick={() => isEnabled && onClick(number)}
    >
      {number}
    </div>
  );
};

export default Number;
