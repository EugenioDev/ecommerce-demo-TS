import { Button } from "../../external/components/ui/button"

type ProductProps = {
    description: string,
    price?: number,
    thumbnail: string,
    rating: number,
    addToCart: () => void
}

function SingleProduct({ thumbnail,description, rating,addToCart }: ProductProps) {
   
    return (
        <div className="p-2 mt-2 w-full">
            <img src={thumbnail} alt="" className="w-full h-[150px] object-cover" />
            <div className="mt-2">
                <p className="text-gray-400 truncate">{description}</p>
                <p className="text-xs mt-2">Rating: {rating}</p>
            </div>
            <Button variant="outline" className="w-full mt-2 cursor-pointer bg-slate-400/50 p-2 md:rounded-lg" onClick={addToCart}>Aggiungi al carrello</Button>
        </div>
    )
}

export default SingleProduct