import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import './SearchList.scss';
import { Loader } from '../../common/Loader';
import { SearchListItem } from './SearchListItem';
import { searchActions } from '../../store/slices/search';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

const mockItems = [
  { id: 1, name: 'lofasz' },
  { id: 2, name: 'lofasz2' },
];

export function SearchList() {
  const { t } = useTranslation();
  const { searchString, isSearchInProgress, items } = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();

  // Search event handler
  useEffect(() => {
    const loadMockItems = async () => {
      dispatch(searchActions.startLoading());
      const items = await new Promise<any>((resolve) => {
        setTimeout(() => {
          resolve(mockItems);
        }, 500);
      });
      dispatch(searchActions.setItems({ items }));
      dispatch(searchActions.stopLoading());
    }

    loadMockItems();
  }, [dispatch, searchString]);

  return (
    <div className='SearchList'>
      {isSearchInProgress ? (
        <div className="SearchList__loaderContainer">
          <Loader />
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
          <div className="SearchList__noItems">{t('pages.search.noItems')}</div>
        )
      )}
    </div>
  );
}
