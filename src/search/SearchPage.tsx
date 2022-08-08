import React from 'react';

import './SearchPage.scss';
import { SearchForm } from './SearchForm';
import { SearchList } from './SearchList';

export function SearchPage() {
  return (
    <div className='SearchPage'>
      <SearchForm className='SearchPage__searchForm' />
      <SearchList />
    </div>
  );
}
