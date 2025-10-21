/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { ForgetSType, FrogetSchema} from '@/schema/auth.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'


export default function Register() {
  const router =  useRouter()
 async function handleForget(values:ForgetSType){

    const loadingId = toast.loading('loading...')
   
    try {
    const options = {
    url:'https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords',
    method:'POST',
    data:values       
    }
 const {data} = await axios.request(options)  
    console.log(values);
    
    toast.success('Message sent')
    router.push('/verifyCode')
    

    } catch (error:any) {

        toast.error(error.response.data.message)
    }finally{
      toast.dismiss(loadingId)
    }

    
}
    const myform= useForm<ForgetSType>({
    defaultValues:{
    email:"",
  },
    resolver:zodResolver(FrogetSchema),
    mode:'all'
})


  return <>
  
  <div className='w-1/2 mx-auto my-12'>

  <h1 className='text-3xl font-semibold my-6'>Froget Password</h1>

  <Form  {...myform}>
   <form onSubmit={myform.handleSubmit(handleForget)} className='space-y-2'>
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

      <Button className='bg-green-500 hover:bg-green-700'>Submit</Button>
   </form>
</Form>

  </div>
  
  
  </>
}
