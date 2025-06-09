export const formatPrice = (price: number, currency: 'RUB' | 'USD' | 'EUR'): string => {

  const divisor = currency === 'RUB' ? 100 : 1;

  return new Intl.NumberFormat(currency === 'RUB' ? 'ru-RU' : 'en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price / divisor);
};
