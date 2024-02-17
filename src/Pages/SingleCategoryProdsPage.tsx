import { useEffect, useState } from "react"
import { Product } from "../model/Product"
import { getProductsByCategory } from "../api/getProductsByCategory";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import SingleCategoryProduct from "../components/SingleCategoryProduct";


function SingleCategoryProdsPage() {

  interface Params { category: string };

  const { category } = useParams<keyof Params>() as Params;
  const [categoryProducts, setCategoryProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      setLoading(true)
      try {
        const response = await getProductsByCategory(category)
        setCategoryProducts(response.data.products)
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
    fetchCategoryProducts()
  }, [])

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className=' p-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2  md:p-4 justify-center'>
          {categoryProducts && categoryProducts.map((product) => (
            // Da continuare ed inserire l'index nel ciclo
            <SingleCategoryProduct
              key={product.id}
              product={product} />
          ))}
        </div>
      )}
    </>
  )
}

export default SingleCategoryProdsPage