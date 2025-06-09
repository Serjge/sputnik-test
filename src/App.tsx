import './App.css'
import {
  ProductCard,
  type ProductCardType,
} from './Components/ProductCard/ProductCard.tsx';

export const App = () => {

  const PRODUCT:ProductCardType = {
    title:'Игровой Ноутбук',
    imageUrl:'https://www.art-active24.ru/images/upload/igrovoj-noutbuk-asus-rog-strix-standart1.jpg',
    origin:'Китай',
    currency: 'RUB',
    price: 55556644
  }

  return (
    <ProductCard price={PRODUCT.price} title={PRODUCT.title} currency={PRODUCT.currency} imageUrl={PRODUCT.imageUrl} origin={PRODUCT.origin} />
  )
}

