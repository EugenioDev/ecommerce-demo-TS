import axios from "axios";
import { Product } from "../model/Product";

export interface ProductData {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
}



export const getSingleProduct = async(id:number) => {
    const url = `https://dummyjson.com/products/${id}`
    const response = await axios.get<ProductData>(url)
    return response
}