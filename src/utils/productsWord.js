export default function productsWord(count) {
  if (count % 10 === 1 && count % 100 !== 11) {
    return "товар";
  } else if (count % 10 >= 2 && count % 10 <= 4 && (count < 12 || count > 14)) {
    return "товара";
  }
  return "товаров";
}
