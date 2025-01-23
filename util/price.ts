export function logicalRound(price: number | string) {
  const priceNumber = Number(price);
  return priceNumber < 1
    ? priceNumber.toFixed(6)
    : priceNumber < 10
    ? priceNumber.toFixed(4)
    : priceNumber.toFixed(2);
}
