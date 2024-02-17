import axios from "axios"
import { ResponseApi } from "./getProductsByCategory"

export const getProducts = () => {
    const url = 'https://dummyjson.com/products?limit=0&skip=0'
    const request = axios.get<ResponseApi>(url)
    return request
}