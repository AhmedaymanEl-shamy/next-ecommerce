/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { VerifySchema, VerifySType} from '@/schema/auth.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"


export default function Register() {
  const router =  useRouter()
 async function handleVerify(values:VerifySType){
    const loadingId = toast.loading('loading.....')
    
    try {
    const options = {
    url:'https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode',
    method:'POST',
    data:values       
    }

    const {data}= await axios.request(options)
    
    toast.success('Code Verified')
    router.push('/resetpassword')
    
   

    } catch (error:any) {

        toast.error(error.response.data.message)
    }finally{
        toast.dismiss(loadingId)
    }

    
}
    const myform= useForm<VerifySType>({
    defaultValues:{
    resetCode:"",
  },
    resolver:zodResolver(VerifySchema),
    mode:'all'
})


  return <>
  
  <div className='w-1/2 mx-auto my-12'>

  <h1 className='text-3xl font-semibold my-6'>Verify Code</h1>

  <Form  {...myform}>
   <form onSubmit={myform.handleSubmit(handleVerify)} className='space-y-2 text-center'>
  {/* {email} */}
  <FormField
    control={myform.control}
    name="resetCode"
    render={({field}) => (
      <FormItem className='flex justify-center me-20 items-center'>
        <FormLabel className='text-lg'>OTP Code:</FormLabel>
        <FormControl>
            <InputOTP  {...field} maxLength={6}>
  <InputOTPGroup >
    <InputOTPSlot className='bg-slate-200 p-7' index={0} />
    <InputOTPSlot className='bg-slate-200 p-7' index={1} />
    <InputOTPSlot className='bg-slate-200 p-7' index={2} />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot className='bg-slate-200 p-7' index={3} />
    <InputOTPSlot className='bg-slate-200 p-7' index={4} />
    <InputOTPSlot className='bg-slate-200 p-7' index={5} />
  </InputOTPGroup>
</InputOTP>
        </FormControl>
        <FormDescription />
        <FormMessage />
      </FormItem>
    )}
  />

      <Button className='bg-green-500 mt-10 hover:bg-green-700'>Submit</Button>
   </form>
</Form>

  </div>
  
  
  </>
}
