import React from 'react';
import Image from 'next/image';

import placehoderImage from '../../../../public/placeholder.png';

const CardLayout = (props: Card) => {
  const { brand, name, set, subset, parallel, cardNumber, year, quantity, price, frontImage }
    = props;

  return (
    <a href="#" className="group">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        {frontImage ?
          <Image
            src={frontImage}
            alt={name}
            priority
            className="w-full h-auto object-center object-cover group-hover:opacity-75"
            width={200}
            height={300}
          /> :
          <Image
            src={placehoderImage}
            alt={name}
            priority
            className="w-full h-auto object-center object-cover group-hover:opacity-75"
            width={200}
            height={300}
          />
        }
      </div>
      <h3 className="font-semibold">{name}</h3>
      <p className="mt-1 font-medium text-gray-900">Quantity: {quantity}</p>
      <p className="mt-1 font-medium text-gray-900">Price: ${price}</p>
    </a>
  );
};

export default CardLayout;
