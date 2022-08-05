import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import './SearchListItem.scss';
import { SearchListItemInterface } from './SearchListItemInterface';
import noImageAvailable from './noImageAvailable.jpg';

interface SearchListItemPropsInterface {
  item: SearchListItemInterface;
  className?: string;
}

export function SearchListItem({ item, className }: SearchListItemPropsInterface) {
  const { t } = useTranslation();

  return (
    <Link to={`/item/${item.id}`} className={'SearchListItem' + (className ? ` ${className}` : '')}>
      <div className="SearchListItem__imageContainer">
        <img
          src={item.imageUrls[0] ? item.imageUrls[0] : noImageAvailable}
          alt={item.title}
          className='SearchListItem__image'
        />
      </div>
      <div className='SearchListItem__description'>
        <div className='SearchListItem__title'>{item.title}</div>
        <div className='SearchListItem__cost'>{item.cost.value} {item.cost.currency}</div>
        <div className="SearchListItem__colors">
          {t('search.listItem.colors')}
          {item.colors.map((backgroundColor, index) => (
            <div key={index} className='SearchListItem__color' style={ { backgroundColor } }></div>
          ))}
        </div>
        <div className="SearchListItem__sizes">
          {t('search.listItem.sizes')}
          {item.sizes.map((size, index) => (
            <span key={index} className='SearchListItem__size'> {size + (index < item.sizes.length - 1 ? ',' : '')}</span>
          ))}
        </div>
      </div>
    </Link>
  );
} 
