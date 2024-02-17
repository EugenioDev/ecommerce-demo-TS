import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ProductData, getSingleProduct } from "../api/getSingleProduct"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../../external/components/ui/carousel"

import { Button } from "../../external/components/ui/button"


function SingleProductPage() {

    interface Params { id: number }
    const { id } = useParams<keyof Params>() as unknown as Params

    const [singleProduct, setSingleProduct] = useState<ProductData | null>( null);
   
    useEffect(() => {
        const fetchSingleProduct = async () => {
            try {
                const response = await getSingleProduct(id)
                if (response.status === 200) {
                    setSingleProduct(response.data)
                }

            } catch (error) {
                console.log(error)
            }
        }
        fetchSingleProduct()
    }, [])

    return (
        <div className="p-2 flex flex-col md:flex-row lg:flex-row w-full">
            <div className="hidden md:flex flex-col">
                {/* Left  section images*/}
                { singleProduct && singleProduct?.images?.map((image, index) => (
                    <img key={index} src={image} alt="" className="w-[150px] object-contain lg:w-[200px] mb-2" />
                ))}
            </div>

            {/* Carousell */}
            <Carousel className="w-3/5 mb-10 lg:mb-0 lg:w-full self-start flex items-center max-w-xl mx-auto lg:mx-20">
                <CarouselContent>
                    {singleProduct?.images.map((image, i) => (
                        <CarouselItem key={i} className="">
                            <div className="w-[300px] p-1 md:w-[550px]">
                                <div className="flex aspect-square items-center justify-center p-2 relative w-full">
                                    <img src={image} className="object-cover max-w-auto" />
                                </div>
                            </div>

                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div className="space-y-5 ml-2 md:space-y-5 md:ml-2">
                <CarouselPrevious />
                <CarouselNext />
                </div> 
            </Carousel>


            <div className="md:border p-2 flex flex-col">
                {/* Right section  */}
                <h1 className="text-4xl font-bold my-5">{singleProduct?.title}</h1>
                <p className="text-2xl">{singleProduct?.description}</p>
                <div className="mt-4">
                    <p className="font-bold text-xs">{singleProduct?.brand}</p>
                    <p className="font-bold">Price: ${singleProduct?.price} | <span>Discount: ${singleProduct?.discountPercentage}</span></p>
                </div>
                <Button  className="p-2 rounded-lg mt-2 bg-slate-100" variant="outline" >Add To Cart</Button>
            </div>
        </div>
    )



}
export default SingleProductPage
