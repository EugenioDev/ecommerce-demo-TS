
import { Product } from "../model/Product";

export interface CartItem {
    product: Partial<Product>
    qty: number
}