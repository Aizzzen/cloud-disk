import React from 'react';
import './Input.scss'

const Input = ({value, setValue, type, placeholder}) => {
    return (
        <input value={value}
               onChange={(event) => setValue(event.target.value)}
               type={type}
               placeholder={placeholder}
        />
    );
};

export default Input;
