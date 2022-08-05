import React, { useEffect, useState } from 'react';

import './CommonTextInput.scss';

interface CommonTextInputPropsInterface {
  value?: string;
  className?: string;
  icon?: string;
  disabled?: boolean;
  onChange: (value: string) => void;
  onIconClick?: (value: string) => void;
}

export function CommonTextInput({ value = '', className, icon, disabled, onChange, onIconClick }: CommonTextInputPropsInterface) {
  const [ inputValue, setInputValue ] = useState(value);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  return (
    <div
      className={'CommonTextInput' + (className ? ` ${className}` : '')}
    >
      <input
        className={'CommonTextInput__input' + (icon ? ' CommonTextInput__input--withIcon' : '')}
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
          className='CommonTextInput__inputIcon material-icons'
          onClick={() => !disabled && onIconClick && onIconClick(inputValue)}
        >
          {icon}
        </span>
      )}
    </div>
  );
}
