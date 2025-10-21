
"use client"
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { LoginSchema, LoginSType} from '@/schema/auth.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Eye, EyeOff } from 'lucide-react';
import Link from 'next/link'
import {signIn, SignInResponse} from 'next-auth/react'
import { toast } from 'sonner'


export default function Register() {
  const [isPassword,setIsPassword] = useState(true)

  const myform= useForm<LoginSType>({
  defaultValues:{
  email:"",
  password:""
},
  resolver:zodResolver(LoginSchema),
  mode:'all'
})
 async function handleLogin(values:LoginSType){

  const loadingId = toast.loading('loading...')
 
const response:SignInResponse|undefined = await signIn('credentials',{
  email:values.email,
  password:values.password,
  redirect:false,
  callbackUrl:'/'

})
    
    if(response?.ok){
      toast.success('logged in successfully')
      toast.dismiss(loadingId)

      window.location.href='/'
    }else{
      toast.error(response?.error)
      toast.dismiss(loadingId)
    }

}


  return <>
  
  <div className='w-1/2 mx-auto my-12'>

  <h1 className='text-3xl font-semibold my-6'>Login Now</h1>

  <Form  {...myform}>
   <form onSubmit={myform.handleSubmit(handleLogin)} className='space-y-2'>
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
  <div className='flex justify-between items-center'>
      <Button className='bg-green-500 hover:bg-green-700'>Login</Button>
      <Link className='text-blue-500 underline' href={'/forgetPassword'}>Forget password</Link>
  </div>
      <div className='flex justify-center items-center'>
        <Link className='text-blue-500 underline font-semibold' href={'/register'}>Dont have Account?</Link>
      </div>
   </form>
</Form>

  </div>
  
  
  </>
}
