import React from 'react';
import styles from './TextArea.module.css';

const TextArea = ({
  theme,
  value,
  onChange,
  onBlur,
  id,
  name,
  type,
  placeholder,
  className,
}) => {
  const classes = styles.input + ` ${className}`;
  return (
    <textarea
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      className={
        theme === 'light' ? classes : classes + ` ${styles['input-dark']}`
      }
    />
  );
};

export default TextArea;
