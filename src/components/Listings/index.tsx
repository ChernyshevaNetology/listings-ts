import React, { FC, ReactNode } from 'react';
import { ListingItem } from '../ListingItem';
import { Product } from 'types';

interface Props {
  productsList: Product[];
}

const Listings: FC<Props> = ({ productsList }) => {
  const listingsToRender: (ReactNode | null)[] = productsList.map(
    ({
      state,
      listing_id,
      url = '',
      MainImage,
      title = '',
      currency_code = '',
      price = '',
      quantity = 0,
    }: Product): ReactNode | null => {
      if (state === 'removed') return null;
      const imageUrl: string = MainImage ? MainImage.url_570xN : '';
      return (
        <ListingItem
          id={listing_id}
          state={state}
          key={listing_id}
          url={url}
          img={imageUrl}
          title={title}
          currency={currency_code}
          price={price}
          quantity={quantity}
        />
      );
    }
  );

  return (
    <div className="wrapper">
      <div className="item-list">{listingsToRender}</div>
    </div>
  );
};

export default Listings;
