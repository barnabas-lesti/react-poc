import React from 'react';

import './CommonLoader.scss';

interface CommonLoaderPropsInterface {
  className?: string;
}

export function CommonLoader({ className }: CommonLoaderPropsInterface) {
  return (
    <div className={'CommonLoader' + (className ? ` ${className}` : '')}>
      <span className='CommonLoader__icon material-icons'>
        sensors
      </span>
    </div>
  );
}
