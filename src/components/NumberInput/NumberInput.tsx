import React from 'react';
import classNames from 'classnames';

import styles from './NumberInput.scss';
import { NumberInputProps } from './NumberInput.interface';

const NumberInput = (props: NumberInputProps) => {
  const { onChange, value, max, min, className } = props;

  const handleChange = e => {
    if (e.target.value === '') e.target.value = 0;
    if (e.target.value < min || e.target.value > max) return;
    onChange(e);
  };

  return (
    <input
      type="number"
      value={value}
      onChange={handleChange}
      className={classNames(styles.input, className)}
      step="0.01"
    />
  );
};

export default NumberInput;
