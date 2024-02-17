// id - description - discount Percentage  - price - brand

import { Link } from "react-router-dom"
import { Product } from "../model/Product"

type SingleProductProps = {
    product: Product
}

function SingleCategoryProduct({ product }: SingleProductProps) {
    return (
        <Link to={`/products/${product.id}`}>
            <div className="bg-gray-100 p-2 mt-2">
                <img src={product.thumbnail} alt="" className=" h-[500px] w-full md:w-full object-cover md:h-[100px]" />
                <div className="mt-2">
                    <h1 className="text-xs underline my-2">{product.category}</h1>
                    <p className="text-gray-400">{product.description}</p>
                    <p className="text-xs mt-2">Rating: {product.rating}</p>
                    <h1 className="font-bold text-xs">$ {product.price}</h1>
                </div>
            </div>
        </Link>
    )
}

export default SingleCategoryProduct