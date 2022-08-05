import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import './SearchList.scss';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { CommonLoader } from '../common/CommonLoader';
import { SearchListItem } from './SearchListItem';
import { fetchItems } from './searchState';

export function SearchList() {
  const { t } = useTranslation();
  const { searchString, isSearchInProgress, items } = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();

  // Search event handler
  useEffect(() => {
    dispatch(fetchItems())
  }, [dispatch, searchString]);

  return (
    <div className='SearchList'>
      {isSearchInProgress ? (
        <div className="SearchList__loaderContainer">
          <CommonLoader />
        </div>
      ) : (
        items && (items.length > 0) ? (
          <div className="SearchList__items">
            {items.map((item, index) => (
              <SearchListItem
                key={index}
                item={item}
                className='SearchList__item'
              />
            ))}
          </div>
        ) : (
          <div className="SearchList__noItems">{t('search.list.noItems')}</div>
        )
      )}
    </div>
  );
}
