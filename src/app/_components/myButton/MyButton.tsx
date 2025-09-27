"use client"
import addProductToCart from '@/api/cart.api'
import { Button } from '@/components/ui/button'
import { CartContext } from '@/context/cart.context'
import { useRouter } from 'next/navigation'
import React, { useContext, useState } from 'react'
import { toast } from 'sonner'

export default function MyButton({id}:{id:string}) {
   const router = useRouter()
   const [isLoading ,setIsloading] = useState(false)
      const context =useContext(CartContext)
   
  async function handleAddToCart(){
    setIsloading(true)
    const data = await addProductToCart(id)
    if(data.status == "success"){
       toast.success(data.message)
      context?.handleCart()
    
 }else{
    toast.error('You must login first')
    router.push('/login')

 }
    setIsloading(false)
    }
  return<>

  <Button disabled={isLoading} onClick={handleAddToCart} className='bg-blue-500 hover:text-blue-500 hover:bg-white hover:outline-2 hover:outline-blue-500 hover:outline-solid transition-all cursor-pointer'>Add to cart</Button>
  
  </>

} 
