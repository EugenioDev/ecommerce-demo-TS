import { Link } from 'react-router-dom';
import { PiSquaresFourLight } from "react-icons/pi";
import { PiCirclesFourLight } from "react-icons/pi";
import { FiSearch } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import CartPanel from './CartPanel';
import { useCartPanel } from '../context/useCartPanel';
import { Button } from "../../external/components/ui/button"
import { selectTotalCartCost, selectTotalCartItems } from '../Utils/cart.selectors';
import { useCart } from '../context/useCart';




function Navbar() {
    const isOpen = useCartPanel(state => state.open)
    const togglePanel = useCartPanel(state => state.togglePanel)
    const totalCartPrice = useCart(selectTotalCartCost)
    const totalCartItems = useCart(selectTotalCartItems)
    const toggleCartPanel = () => {
        togglePanel()
    }
    return (
        <div className='p-4 bg-slate-600 '>

            <div className='flex space-x-5'>
                <Link to='/categories' className=' hidden md:flex items-center text-white font-bold'>
                    <PiSquaresFourLight className='w-6 h-6' />
                    Categories
                </Link>

                <Link to='/products' className=' hidden md:flex space-x-2 items-center text-white font-bold'>
                    <PiCirclesFourLight className='w-6 h-6' />
                    Products
                </Link>

                {/* Form search bar */}
                <form className='flex flex-1 items-center justify-center space-x-2 bg-white rounded-full p-1 overflow-hidden'>
                    <input type="text" className='outline-none border-none w-full ml-2 h-full' placeholder='Search everything here...' />

                    <div className='bg-orange-500 p-2 rounded-full'>
                        <FiSearch className='w-6 h-6' />
                    </div>
                </form>

                <Button
                    onClick={toggleCartPanel}
                    className='text-white text-xs flex flex-col items-center justify-center'>
                    <div className='flex flex-col items-center justify-center'>
                        <IoCartOutline className='w-6 h-6' />
                        <p>{totalCartPrice ? `${totalCartItems} items` : 'No items'}</p>
                        <p>$ {totalCartPrice.toLocaleString('it-IT', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                    </div>
                </Button>
            </div>

            {isOpen && <CartPanel />}
        </div>
    )
}

export default Navbar