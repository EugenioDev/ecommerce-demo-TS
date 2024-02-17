import { useEffect, useState } from 'react'
import { Product } from '../model/Product'
import { getProducts } from '../api/getProducts'
import SingleProduct from '../components/SingleProduct'
import Loading from '../components/Loading'
import { useCartPanel } from '../context/useCartPanel'
import { useCart } from '../context/useCart'


function ProductsPage() {
    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState<boolean>(false)

    const openPanel = useCartPanel(state => state.openPanel)
    const addCart = useCart(state => state.addToCart)

    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true)
            try {
                const response = await getProducts()
                setProducts(response.data?.products)
                setLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        fetchProduct()
    }, [])
    return (
        <div className='p-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 '>
            {loading && <Loading />}
            {products && products.map(product => (
                // Singol Product Card
                <div key={product.id} className='border border-slate-200 rounded-md flex'>
                    <SingleProduct
                        key={product.id}
                        thumbnail={product.thumbnail}
                        // price={product.price}
                        description={product.description}
                        rating={product.rating}
                        addToCart={() => {
                            openPanel()
                            addCart(product)

                        }}
                    />
                </div>

            ))}


        </div>
    )
}

export default ProductsPage