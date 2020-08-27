import React from 'react';
import classNames from 'classnames';

import styles from './TextInput.scss';
import { TextInputProps } from './TextInput.interface';

const TextInput = (props: TextInputProps) => {
  const { onChange, value, disabled = false, className } = props;

  return (
    <input
      type="text"
      value={value || ''}
      onChange={onChange}
      className={classNames(styles.input, className)}
      disabled={disabled}
    />
  );
};

export default TextInput;
