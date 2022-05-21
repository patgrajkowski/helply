import React from 'react';
import styles from './InputField.module.css';
const InputField = ({ theme, value, onChange, onBlur, id, name, type, placeholder, className }) => {
    const classes = styles.input + ` ${className}`;
    return (
        <input
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            className={(theme === 'light' ? classes : classes + ` ${styles['input-dark']}`) + 'p-4'}
        />
    );
};

export default InputField;
