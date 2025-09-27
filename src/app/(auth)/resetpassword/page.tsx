/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { ResetSchema, ResetSType} from '@/schema/auth.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { Eye, EyeOff } from 'lucide-react';


export default function Register() {
  const router =  useRouter()
  const [isPassword,setIsPassword] = useState(true)
 async function handleReset(values:ResetSType){
    const loadingId = toast.loading('loading.....')
    
    try {
    const options = {
    url:'https://ecommerce.routemisr.com/api/v1/auth/resetPassword',
    method:'PUT',
    data:values       
    }

    await axios.request(options)
    
    toast.success('Password reset Successfully')
    router.push('/login')
    
   

    } catch (error:any) {

        toast.error(error.response.data.message)
    }finally{
        toast.dismiss(loadingId)
    }

    
}
    const myform= useForm<ResetSType>({
    defaultValues:{
    email:"",
    newPassword:""
  },
    resolver:zodResolver(ResetSchema),
    mode:'all'
})


  return <>
  
  <div className='w-1/2 mx-auto my-12'>

  <h1 className='text-3xl font-semibold my-6'>Reset Password</h1>

  <Form  {...myform}>
   <form onSubmit={myform.handleSubmit(handleReset)} className='space-y-2'>
  {/* {email} */}
  <FormField
    control={myform.control}
    name="email"
    render={({field}) => (
      <FormItem>
        <FormLabel className='text-lg'>Email:</FormLabel>
        <FormControl>
            <Input {...field}/>
        </FormControl>
        <FormDescription />
        <FormMessage />
      </FormItem>
    )}
  />
  {/* {password} */}
  <FormField
    control={myform.control}
    name="newPassword"
    render={({field}) => (
      <FormItem>
        <FormLabel className='text-lg'>New Password:</FormLabel>
        <FormControl>
            <div className='relative'>
              <Input {...field} type={isPassword? 'password':'text'}/>
             {isPassword ? <Eye onClick={()=>setIsPassword(false)} className='absolute end-2 top-2'/>:  <EyeOff onClick={()=>setIsPassword(true)} className='absolute end-2 top-2 '/> }
            
            </div>
        </FormControl>
        <FormDescription />
        <FormMessage />
      </FormItem>
    )}
  />
      <Button className='bg-green-500 hover:bg-green-700'>Reset</Button>
   </form>
</Form>

  </div>
  
  
  </>
}
