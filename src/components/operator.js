import React from 'react';
import classNames from 'classnames';

const Operator = ({ operator, onClick, isEnabled }) => {
  const classes = {
    'c-operator': true,
    'c-control': true,
    'is-disabled': !isEnabled,
  };

  return (
    <div
      className={classNames(classes)}
      onClick={() => isEnabled && onClick(operator)}
    >
      {operator}
    </div>
  );
};

export default Operator;
