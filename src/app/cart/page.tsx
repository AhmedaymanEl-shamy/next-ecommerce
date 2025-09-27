/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { clearCart} from "@/api/cart.api"
import { useContext, useEffect, useState } from "react"
import { ShoppingCart } from 'lucide-react';
import DisplayCart from "../_components/displayCart/DisplayCart";
import { Button } from '@/components/ui/button';
import CartLoading from "../_components/CartLoading/CartLoading";
import Link from "next/link";
import { toast } from "sonner";
import { CartContext } from "@/context/cart.context";

export default function Cart() {
const [isLoading,setIsLoading] = useState(true)
const context = useContext(CartContext)
const [cartData,setCartData] = useState<any>(undefined)
        


  async function handleGetProductFromCart(){

     const data = await context?.handleCart()
     setIsLoading(false)
     setCartData(data)
     
      
  }

   async function handleClearCart(){

    if(context?.allProducts.length == 0){
      return toast.error('its already Empty Go for shopping')
    }
try {
       const data = await clearCart()
      console.log(data);
      if(data.message == 'success'){

        context?.setAllProducts([])
        toast.success('Cart Cleared')
        context?.handleCart()
      }

} catch (error) {
    toast.error('you must log in first')
    console.log(error);
    
}
   }


useEffect(() => {
  handleGetProductFromCart()
}, [])

if(isLoading){
  return <CartLoading/>
}

  return <>
  <div className="container">
    <div className="bg-slate-200 my-10 p-10">
     <div className="flex justify-between items-center">
    <div>   <h2 className="flex gap-3 items-center font-semibold text-2xl"><ShoppingCart/>Shopping Cart</h2>
      <h3 className="font-semibold text-blue-500 my-2 text-lg">Total Cart Price : {context?.totalPrice} EGP</h3></div>
      <Button onClick={handleClearCart} className="bg-red-500 hover:bg-red-800">Clear Cart</Button>
     </div>


      {context?.allProducts?.length ? 
      <>
       {context?.allProducts?.map((product)=><DisplayCart key={product.product.id} product={product}/>) }

       <div className="flex justify-end">
        <Link href={`/checkout/${cartData?.cartId}`}><Button className="m-4 bg-blue-500 hover:bg-blue-800">Check out</Button></Link>
       </div>
     
      </> :<>  <div className="text-2xl mt-5 flex justify-center"><h2>Cart is Empty , Shop now <span className="text-blue-500 font-semibold underline"><Link href={'/products'}>Go to Products</Link></span></h2> </div></>}
      
      
    </div>
  </div>
  </>
}
