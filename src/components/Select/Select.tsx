import React from 'react';
import { default as ReactSelect, components } from 'react-select';
import styles from './Select.scss';

const customStyles = props => {
  return {
    control: (provided, state) => ({
      ...provided,
      borderRadius: '5px',
      borderColor: 'var(--fontColor)',
      boxShadow: state.isFocused ? '0 0 0 1px var(--fontColor)' : 'none',
      '&:hover': {
        borderColor: 'var(--fontColor)'
      }
    }),
    indicatorsContainer: provided => ({
      display: 'none'
    }),
    placeholder: provided => ({
      ...provided,
      display: 'flex',
      marginLeft: 10,
      color: 'var(--fontColor)',
      fill: 'var(--fontColor)'
    }),
    option: provided => ({
      ...provided,
      color: '#000'
    }),
    singleValue: provided => ({
      ...provided,
      color: 'var(--fontColor)'
    }),
    input: provided => ({
      ...provided,
      color: 'var(--fontColor)'
    })
  };
};

function Select(props) {
  const { onChange, onInputChanged, options, value, placeholder, isMulti = false } = props;

  const handleChange = newVal => {
    onChange(newVal);
  };

  const Placeholder = props => {
    return <components.Placeholder {...props}>{props.children}</components.Placeholder>;
  };

  return (
    <ReactSelect
      placeholder={placeholder || ''}
      className={styles.Select}
      onChange={handleChange}
      components={{
        Placeholder
      }}
      options={options}
      styles={customStyles(props)}
      isClearable={true}
      isMulti={isMulti}
    />
  );
}

export default Select;
