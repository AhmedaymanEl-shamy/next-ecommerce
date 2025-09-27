/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { RegisterSchema, RegisterSType } from '@/schema/auth.schema'
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
 async function handleFrom(values:RegisterSType){
    const loadingId = toast.loading('loading.....')
    
    try {
    const options = {
    url:'https://ecommerce.routemisr.com/api/v1/auth/signup',
    method:'POST',
    data:values       
    }

     await axios.request(options)
    
    toast.success('Email Created')
    router.push('/login')
    
   

    } catch (error:any) {

        toast.error(error.response.data.message)
    }finally{
        toast.dismiss(loadingId)
    }

    
}
    const myform= useForm<RegisterSType>({
    defaultValues:{
    name:"",
    email:"",
    password:"",
    rePassword:"",
    phone:""
  },
    resolver:zodResolver(RegisterSchema),
    mode:'all'
})


  return <>
  
  <div className='w-1/2 mx-auto my-12'>

  <h1 className='text-3xl font-semibold my-6'>Register Now</h1>

  <Form  {...myform}>
   <form onSubmit={myform.handleSubmit(handleFrom)} className='space-y-2'>
     {/* {name} */}
  <FormField
    control={myform.control}
    name="name"
    render={({field}) => (
      <FormItem>
        <FormLabel className='text-lg'>Name:</FormLabel>
        <FormControl>
            <Input {...field}/>
        </FormControl>
        <FormDescription />
        <FormMessage />
      </FormItem>
    )}
  />
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
    name="password"
    render={({field}) => (
      <FormItem>
        <FormLabel className='text-lg'>Password:</FormLabel>
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
  {/* {rePassword} */}
  <FormField
    control={myform.control}
    name="rePassword"
    render={({field}) => (
      <FormItem>
        <FormLabel className='text-lg'>Confirm Password:</FormLabel>
        <FormControl>

        <Input {...field} type='password'/>

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
        <FormLabel className='text-lg'>Phone Number:</FormLabel>
        <FormControl>
            <Input {...field}/>
        </FormControl>
        <FormDescription />
        <FormMessage />
      </FormItem>
    )}
  />
  <Button className='bg-green-500 hover:bg-green-700'>Register</Button>
   </form>
</Form>

  </div>
  
  
  </>
}
