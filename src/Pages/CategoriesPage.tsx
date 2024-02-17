import { useEffect, useState } from 'react'
import { getCategories } from '../api/getCategories';

import SingleCategory from '../components/SingleCategory';
import LoadingCategory from '../components/LoadingCategory';

function CategoriesPage() {
    const [categories, setCategories] = useState<ProductCategory[]>();
    const [loading,setLoading] = useState(false)

    useEffect(() => {
        const fetchCategories = async () => {
            setLoading(true)
            const response = await getCategories()
            setCategories(response.data)
            setLoading(false)
        }
        fetchCategories()
    }, [])
    
    return (
        <div className='m-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 id'>
            {loading && <LoadingCategory/>}
            {categories && categories.map((category, index) => (
                <div key={category} className=''>
                    {index !== categories.length - 1 && (
                            <SingleCategory category={category}  />
                    )} {/* Aggiunge spaziatura tra i link, eccetto per l'ultimo */}
                </div>

            ))}
        </div>
    )
}

export default CategoriesPage