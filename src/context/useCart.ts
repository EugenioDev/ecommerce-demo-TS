import { create } from "zustand";
import { CartItem } from "../model/CartItem";
import { Product } from "../model/Product";

// il tipo di dato che il carrello dovrà contenere
export interface CartState {
  list: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number | undefined) => void;
  increaseQty: (productId: number | undefined) => void;
  decreaseQty: (productId: number | undefined) => void;
  // clearCart: () => void;
}

export const useCart = create<CartState>((set, get) => ({
  list: [],
  addToCart: (product: Product) => {
    // Se il prodotto non esiste, aggiungerlo al carrello altrimenti...
    const found = get().list.find(item => item.product.id === product.id)
    if(found){
      get().increaseQty(product.id)
    }else{
      const item: CartItem = { product,qty:1 };
      set((state) => ({ list: [...state.list, item] }));
    }
   
  },

  removeFromCart: (productId: number | undefined) => {
    set(state => ({ list: state.list.filter(item => item.product.id !== productId)}))
  },
  increaseQty: (productId: number | undefined) => {
    const found = get().list.find(item => item.product.id === productId);
    if (found) {
      found.qty++;
      set(state => ({
        list: state.list.map(item => {
          return item.product.id === found.product.id ? found : item;
        })
      }))
    }
  },
  decreaseQty: (productId: number | undefined) => {
    const found = get().list.find(item => item.product.id === productId);

    if (found?.qty === 1) {
      get().removeFromCart(productId);
    }

    if (found && found.qty > 0) {
      found.qty--;
      set(state => ({
        list: state.list.map(item => {
          return item.product.id === found.product.id ? found : item;
        })
      }))
    }
  },
  // clearCart: () => {},
}));
