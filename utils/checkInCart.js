
export function checkInCart(products, item) {
  return products.find((c) => c.id === item.id);
}