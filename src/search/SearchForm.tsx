import React, { useEffect, useState } from 'react';

import './SearchForm.scss';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setSearchString } from './searchState';

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
      dispatch(setSearchString(searchString));
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
      <div className='SearchForm__inputContainer'>
        <input
          className='SearchForm__input'
          type='text'
          disabled={isSearchInProgress}
          value={inputValue}
          onChange={(({ target: { value }}) => {
            setInputValue(value);
          })}
        />
        <span
            className='SearchForm__searchIcon material-icons'
            onClick={() => !isSearchInProgress && handleSearch(inputValue)}
        >
          search
        </span>
      </div>
    </form>
  );
}
