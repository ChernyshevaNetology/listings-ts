import React, { FC } from 'react';
import {
  TITLE_LENGTH,
  MEDIUM_QUANTITY,
  LOW_QUANTITY,
  currencyOptions,
} from './ListingItemConstants';
import { ListingItemPropTypes } from './ListingItemTypes';

const ListingItem: FC<ListingItemPropTypes> = ({
  state,
  id,
  url,
  img,
  title,
  currency,
  price,
  quantity,
}) => {
  if (state === 'removed') {
    return null;
  }

  const handleTitle = (name: string): string =>
    name.length > TITLE_LENGTH ? `${name.slice(0, TITLE_LENGTH)}...` : title;

  const handleQuantity = (level: number): string => {
    if (level < LOW_QUANTITY) {
      return 'low';
    }
    if (level <= MEDIUM_QUANTITY) {
      return 'medium';
    }
    return 'high';
  };

  return (
    <div key={id} className="item">
      <div className="item-image">
        <a href={url}>
          <img src={img} alt={title} />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{handleTitle(title)}</p>
        <p className="item-price">
          {currencyOptions[currency] || 'GBP'}
          {price}
        </p>
        <p className={`item-quantity level-${handleQuantity(quantity)}`}>
          {quantity} left
        </p>
      </div>
    </div>
  );
};

export { ListingItem };
