import { useNavigate } from "react-router-dom";
import { Button } from "../../external/components/ui/button"
import { useCartPanel } from "../context/useCartPanel";
import { useCart } from "../context/useCart";
import { selectTotalCartCost} from "../Utils/cart.selectors";
import { IoCloseCircle } from "react-icons/io5";


function CartPanel() {

  const navigate = useNavigate()
  const closeCartPanel = useCartPanel(state => state.closePanel)

  let list = useCart(state => state.list)
  const totalCartPrice = useCart(selectTotalCartCost)
  
  const goToCart = () => {
    navigate('/cart')
    closeCartPanel()

  }
  return (
    <div className=" w-full right-0 md:max-w-xl z-10 fixed md:right-10 top-20  bg-gray-100 p-4 rounded-lg shadow-md">
      <div className="flex justify-between items-center">
      <h2 className="text-xl font-bold mb-4">Carrello</h2>
      <IoCloseCircle className="w-6 h-6 cursor-pointer" onClick={closeCartPanel}/>
      </div>
      
      {list && list.map((item) => (
        
        <div key={item.product.id} className="flex items-center mb-4">
          <img src={item.product.thumbnail} alt={item.product.title} className="w-16 h-16 object-cover rounded-md mr-4" />
          <div className="flex-1">
            <h3 className="font-semibold">{item.product.title}</h3>
          </div>
          <div className="flex space-x-2">
             <p className="text-gray-600"> ${item.product.price}</p> 
             <p>x {item.qty}</p> 
          </div> 
        </div>
      ))}
      <hr className="my-4" />
        <div className="flex justify-between">
          <span className="font-semibold">Total: $ {totalCartPrice.toLocaleString('it-IT', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
          {/* <span>${totalPrice.toFixed(2)}</span> */}
        </div>
      
      <Button className="bg-gray-500 w-full p-2 rounded-lg" onClick={goToCart}>Vai al Carrello</Button>
    </div>
  );
}

export default CartPanel