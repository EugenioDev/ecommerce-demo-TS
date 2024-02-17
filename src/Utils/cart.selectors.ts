import { CartState } from "../context/useCart"


export const selectCartList = (state: CartState) => state.list;

export const selectCartIsEmpty = (state: CartState) => state.list.length === 0;

export const selectTotalCartCost = (state: CartState) =>
  state.list.reduce((acc, item) => {
    // Verifica se item.product e item.product.price sono definiti prima di aggiungere al totale
    if (item.product && item.product.price) {
      return acc + (item.qty * item.product.price);
    }
    return acc;
  }, 0);

export const selectTotalCartItems = (state: CartState) =>
  state.list.reduce((acc, item) => acc + (item.qty), 0)