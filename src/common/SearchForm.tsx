import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { searchActions } from '../store/slices/search';

import './SearchForm.scss';
import { TextInput } from './TextInput';

interface SearchFormPropsInterface {
  onSubmit?: (searchString: string) => void;
  className?: string;
}

export function SearchForm({ onSubmit = () => {}, className }: SearchFormPropsInterface) {
  const { searchString, isSearchInProgress } = useAppSelector((state) => state.search);
  const [ inputValue, setInputValue ] = useState(searchString);
  const dispatch = useAppDispatch();

  const handleSearch = (searchString: string) => {
    if (!isSearchInProgress) {
      dispatch(searchActions.setSearchString({ searchString }));
      onSubmit(searchString);
    }
  }

  useEffect(() => {
    setInputValue(searchString);
  }, [searchString]);

  return (
    <form
      className={'SearchForm' + (className ? ` ${className}` : '')}
      onSubmit={(e) => {
        e.preventDefault();
        handleSearch(inputValue);
      }}
    >
      <TextInput
        icon='search'
        value={inputValue}
        disabled={isSearchInProgress}
        onChange={(value) => setInputValue(value)}
        onIconClick={(value) => handleSearch(value)}
      />
    </form>
  );
}