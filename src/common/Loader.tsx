import React from 'react';

import './Loader.scss';

interface LoaderPropsInterface {
  className?: string;
}

export function Loader({ className }: LoaderPropsInterface) {
  return (
    <div className={'Loader' + (className ? ` ${className}` : '')}>
      <span className='Loader__icon material-icons'>
        sensors
      </span>
    </div>
  );
}
