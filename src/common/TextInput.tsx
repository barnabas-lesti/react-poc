import React, { useEffect, useState } from 'react';

import './TextInput.scss';

interface TextInputPropsInterface {
  value?: string;
  className?: string;
  icon?: string;
  disabled?: boolean;
  onChange: (value: string) => void;
  onIconClick?: (value: string) => void;
}

export function TextInput({ value = '', className, icon, disabled, onChange, onIconClick }: TextInputPropsInterface) {
  const [ inputValue, setInputValue ] = useState(value);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  return (
    <div
      className={'TextInput' + (className ? ` ${className}` : '')}
    >
      <input
        className={'TextInput__input' + (icon ? ' TextInput__input--withIcon' : '')}
        type='text'
        disabled={disabled}
        value={inputValue}
        onChange={(({ target: { value }}) => {
          setInputValue(value);
          onChange(value);
        })}
      />
      {icon && (
        <span
          className='TextInput__inputIcon material-icons'
          onClick={() => !disabled && onIconClick && onIconClick(inputValue)}
        >
          {icon}
        </span>
      )}
    </div>
  );
}
