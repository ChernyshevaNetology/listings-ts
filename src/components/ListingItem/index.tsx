import React, { FC } from 'react';

const TITLE_LENGTH: number = 50;
const LOW_QUANTITY: number = 50;
const MEDIUM_QUANTITY: number = 50;

interface Props {
  id: number;
  state: string;
  url: string;
  img: string;
  title: string;
  currency: string;
  price: string;
  quantity: number;
}

const ListingItem: FC<Props> = ({
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

  const handleCurrency = (currencyCode: string): string => {
    switch (currencyCode) {
      case 'USD':
        return '$';
      case 'EUR':
        return '€';
      default:
        return 'GBR ';
    }
  };

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
          {handleCurrency(currency)}
          {price}
        </p>
        <p className={`item-quantity level-${handleQuantity(quantity)}`}>
          {quantity} left
        </p>
      </div>
    </div>
  );
};

export default ListingItem;
