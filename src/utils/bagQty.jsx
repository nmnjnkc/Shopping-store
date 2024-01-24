export const bagTotalQty = (cart) => {
  return cart?.reduce((totalQty, item) => {
    totalQty += Number(item.qty);

    return totalQty;
  }, 0);
};
