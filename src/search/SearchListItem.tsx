import React from 'react';

import './SearchListItem.scss';

interface SearchListItemPropsInterface {
  item: any;
  className?: string;
}

export function SearchListItem({ item, className }: SearchListItemPropsInterface) {
  return (
    <div className={'SearchListItem' + (className ? ` ${className}` : '')}>
      <pre>{JSON.stringify(item)}</pre>
    </div>
  );
}
