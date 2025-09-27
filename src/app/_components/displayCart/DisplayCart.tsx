import React, { useContext, useState } from 'react'
import Image from "next/image";
import { Trash } from 'lucide-react';
import { CartProductType } from '@/types/cart.type';
import { Button } from '@/components/ui/button';
import { clearProductFromCart, updateCartCount } from '@/api/cart.api';
import { toast } from 'sonner';
import { CartContext } from '@/context/cart.context';


export default function DisplayCart({product}:{product:CartProductType}) {

const [isLoadin,setIsLoading] = useState(false)
const context = useContext(CartContext)

  async function handleDeletProduct(){
    setIsLoading(true)
   const loadToast = toast.loading('loading....')
    try {
      
      const data = await clearProductFromCart(product.product.id)
      if(data.status == 'success'){

      toast.success('item Deleted')
      context?.handleCart()
             
        
      }

    } catch (error) {
      toast.error('there is an error')
    }finally{
      setIsLoading(false)
      toast.dismiss(loadToast)
    }
  }

  async function handleUpdateCount(newCount:number){
      setIsLoading(true)
    try {
     const data = await updateCartCount(product.product.id , newCount)

      if(data.status == 'success'){
      toast.success('item Updated')
      context?.handleCart()
     
    }
    
    } catch (error) {
      toast.error('there is an error')
    }finally{
      setIsLoading(false)
    }

  }



  return  <div className="flex justify-between items-center border-b-2 border-slate-500 py-10">
        <div className="flex gap-3">
          <Image src={product.product.imageCover} alt={product.product.title}  width={500} height={500} className='w-40'/>
          <div className='space-y-4'>
            <h3>product title :{product.product.title}</h3>
          <h4>Price :{product.price} x ({product.count}) = {product.price*product.count} EGP</h4> 
          <Button disabled={isLoadin} onClick={handleDeletProduct} className="bg-red-500 py-2 px-6 rounded-lg cursor-pointer flex items-center hover:bg-red-800 text-white gap-2 disabled:bg-slate-300 disabled:cursor-not-allowed  "> <Trash/> Remove</Button>
        </div>
          </div>
        <div className="flex gap-3 items-center">
              <Button disabled={isLoadin} onClick={()=>handleUpdateCount(product.count+1)} className="bg-blue-500 cursor-pointer hover:bg-blue-800 text-white rounded-lg p-2 h-10 w-10 disabled:cursor-not-allowed">+</Button>
              {isLoadin ? <i className='fa-solid fa-spinner fa-spin  text-blue-600'></i>   : <h4 className="text-xl">{product.count}</h4>}
              <Button disabled={isLoadin} onClick={()=>handleUpdateCount(product.count-1)} className="bg-blue-500 cursor-pointer hover:bg-blue-800 text-white rounded-lg p-2 h-10 w-10 disabled:cursor-not-allowed">-</Button>
        </div>
      </div>
}
