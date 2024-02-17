
import { Link } from 'react-router-dom';

interface CategoryProps {
    category:string
}
function SingleCategory({category}:CategoryProps) {
    // Al click della singola categoria devo essere portato a => /products/category/:category
    return (
        <div key={category} className='bg-gray-100 h-[300px] 
        w-auto flex justify-center items-center rounded-md hover:text-white 
        transition-all hover:cursor-pointer'>
            <Link to={`/products/category/${category}`}>
                <p className='text-2xl font-extrabold'>{category.replace(/-/g, ' ').toUpperCase()}</p>
            </Link>
        </div>
    )
}

export default SingleCategory