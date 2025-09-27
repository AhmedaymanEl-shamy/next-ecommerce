  "use client"
import { makeCashPayment, makeOnlinePayment } from '@/api/checkOut.api'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { CartContext } from '@/context/cart.context'
import { checkOutShema, CheckOutType } from '@/schema/checkOut.shema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useParams, useRouter } from 'next/navigation'
import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'

export default function CheckOut() {

const context = useContext(CartContext)

const router = useRouter()


const [paymentflag,setPaymentFlag]=useState('')
  const {id}:{id:string} = useParams()


 const myform = useForm<CheckOutType>({
    defaultValues:{
      details:'',
      phone:'',
      city:''
    },
    resolver:zodResolver(checkOutShema),
    mode:'all'
  })


async function handleCheckOut(values:CheckOutType){

if(paymentflag == 'cash'){
   const data = await makeCashPayment(id,values)

   console.log(data);
      context?.handleCart()
      router.push('/allorders')
}else{
  const data = await makeOnlinePayment(id,'https://next-ecommerce-ekvmz8fia-ahmedaymanel-shamys-projects.vercel.app/',values)

  console.log(data);
  if(data.status == 'success'){
   window.location.href = data.session.url
  }
}


}




  return <>
  <div className="container">

  <h1 className='text-3xl font-semibold'>Check Out</h1>
   <Form  {...myform}>
   <form onSubmit={myform.handleSubmit(handleCheckOut)} className='space-y-2'>
  {/* {details} */}
  <FormField
    control={myform.control}
    name="details"
    render={({field}) => (
      <FormItem>
        <FormLabel className='text-lg'>Details:</FormLabel>
        <FormControl>
            <Input {...field}/>
        </FormControl>
        <FormDescription />
        <FormMessage />
      </FormItem>
    )}
  />
  
  {/* {phone} */}
  <FormField
    control={myform.control}
    name="phone"
    render={({field}) => (
      <FormItem>
        <FormLabel className='text-lg'>phone:</FormLabel>
        <FormControl>
            <Input {...field}/>
        </FormControl>
        <FormDescription />
        <FormMessage />
      </FormItem>
    )}
  />
  
  {/* {city} */}
  <FormField
    control={myform.control}
    name="city"
    render={({field}) => (
      <FormItem>
        <FormLabel className='text-lg'>city:</FormLabel>
        <FormControl>
            <Input {...field}/>
        </FormControl>
        <FormDescription />
        <FormMessage />
      </FormItem>
    )}
  />
  
  
  <div className='flex  items-center gap-4'>
      <Button onClick={()=>setPaymentFlag('online')} className='bg-green-500 hover:bg-green-700'>Make online Payment</Button>
      <Button onClick={()=>setPaymentFlag('cash')} className='bg-green-500 hover:bg-green-700'>Make cash Payment</Button>
  </div>
   
   </form>
</Form>
  </div>

  </>
   
}
