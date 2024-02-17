import { Outlet, createBrowserRouter } from "react-router-dom";
import App from "../App";
import ProductsPage from "../Pages/ProductsPage";
import Navbar from "../components/Navbar";
import CategoriesPage from "../Pages/CategoriesPage";
import SingleCategoryProdsPage from "../Pages/SingleCategoryProdsPage";
import SingleProduct from "../Pages/SingleProductPage";
import CartPage from "../Pages/CartPage";



const AppLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <App />
            },
            {
                path: '/products',
                element: <ProductsPage />
            },
            {
                path:'/products/category/:category',
                element:<SingleCategoryProdsPage/>
            },
            {
                path:'/categories',
                element:<CategoriesPage/>
            },
            {
                path:'/products/:id',
                element:<SingleProduct/>
            },
            {
                path:'/cart',
                element: <CartPage/>
            }
           
        ]

    }
    
])