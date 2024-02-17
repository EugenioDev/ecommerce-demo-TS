import axios from "axios"
import { Product } from "../model/Product"



export interface ResponseApi {
    products: Product[];
    total?: number;
    skip?: number;
    limit?: number;
  }

export const getProductsByCategory = (category:string) => {
    const url = `https://dummyjson.com/products/category/${category}`
    const request = axios.get<ResponseApi>(url)
    return request
}