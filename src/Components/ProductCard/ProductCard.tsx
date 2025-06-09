import type { FC } from 'react';
import { formatPrice } from '../../utils/priceFormatter.ts';

export type ProductCardType = {
  title: string;
  origin: string;
  price: number;
  currency: 'RUB' | 'USD' | 'EUR';
  imageUrl: string;
}

export const ProductCard: FC<ProductCardType> = ({title, origin, price, currency, imageUrl}) => {

  return (
    <div className="max-w-lg rounded-lg overflow-hidden shadow-lg bg-white transition-transform flex flex-col min-[500px]:flex-row">
      <div className="relative h-full w-full">
        <img
          src={imageUrl}
          alt={title}
          className="object-cover"
        />
      </div>

      <div className="p-4 flex flex-col justify-center">
        <h3 className="text-stone-950 text-lg font-semibold mb-1 text-center min-[500px]:text-left ">{title}</h3>
        <p className="text-gray-600 text-sm mb-2 text-center min-[500px]:text-left">Страна: {origin}</p>

        <div className="flex flex-col min-[500px]:flex-row min-[500px]:items-center justify-between gap-2 mt-4">
          <span className="text-xl font-bold text-blue-600">
            {formatPrice(price, currency)}
          </span>
        </div>
      </div>
    </div>
  );
};

