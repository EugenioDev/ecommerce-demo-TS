import { selectCartList, selectTotalCartCost } from "../Utils/cart.selectors"
import { useCart } from "../context/useCart"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../../external/components/ui/table"
import { Button } from "../../external/components/ui/button"

function CartPage() {

  const list = useCart(selectCartList)
  console.log(list)
  const totalCartCost = useCart(selectTotalCartCost)
  const increaseQty = useCart(state => state.increaseQty);
  const decreaseQty = useCart(state => state.decreaseQty);

  return (

    <>
      {

        list.length > 0 ? (
          <div className='p-10'>
            <Table className="max-w-3xl mx-auto">
              <TableCaption className="text-3xl mb-10">
                <h1>Il tuo carrello</h1>
              </TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-center font-bold">Img</TableHead>
                  <TableHead className="text-center font-bold">Nome</TableHead>
                  <TableHead className="font-bold text-center">Prezzo</TableHead>
                  <TableHead className="text-center font-bold">Quantità</TableHead>
                  <TableHead className="text-center font-bold">Rimuovi/Aggiungi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {list.map(item => (
                  <TableRow key={item.product.id}>
                    <TableCell className="text-center"><img src={item.product.thumbnail} alt="" className="w-20 h-20 object-contain" /></TableCell>
                    <TableCell className="text-center">{item.product.title}</TableCell>
                    <TableCell className="text-center"> $ {item.product.price}</TableCell>
                    <TableCell className="text-center">{item.qty}</TableCell>
                    <TableCell className="flex items-center mt-6 justify-center gap-5">
                      <Button className="cursor-pointer" onClick={() => decreaseQty(item.product.id)}>-</Button>
                      <Button className="cursor-pointer" onClick={() => increaseQty(item.product?.id)}>+</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter className="bg-gray-400/50">
                <TableRow className="text-xl text-right">
                  <TableCell className="text-left" colSpan={4}>Total: </TableCell>
                  <TableCell className="mr-2 text-right">${totalCartCost.toLocaleString('it-IT', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </div>
        ) : ( <div className="max-w-2xl mx-auto text-center bg-gray-500/50 py-5 my-5">
          <p>Il tuo carrello è vuoto</p>
          <p>Aggiungi qualcosa al carrello per poter visualizzare gli articoli</p>
        </div> )}

    </>
  )
}

export default CartPage