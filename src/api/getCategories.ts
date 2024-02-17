import axios from "axios";

export const getCategories =() => {
    const url = 'https://dummyjson.com/products/categories';
    const request = axios.get<ProductCategory[]>(url)
    return request
}