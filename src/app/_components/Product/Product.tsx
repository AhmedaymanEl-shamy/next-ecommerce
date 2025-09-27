import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Eye, Heart, ShoppingCart, Star } from 'lucide-react';
import { ProductsType } from '@/types/products.types';
import Link from 'next/link';
import Image from 'next/image';
import MyButton from '../myButton/MyButton';

export default function Product({product}:{product:ProductsType}) {
  return <>
     <Card className='group p-2'>
  <CardHeader>
    <CardTitle className='relative '>
       <Image src={product.imageCover} alt={product.title} width={500} height={500}/>
    <div className="flex justify-evenly  items-center absolute bg-black/30 opacity-0 inset-0 group-hover:opacity-100 transition-all duration-500">
    <ShoppingCart  className='bg-blue-500 h-8 w-8 cursor-pointer text-white p-1 rounded-full hover:text-blue-500 hover:bg-white transition-all duration-500'/>
    <Link href={`/products/${product._id}`}> <Eye   className='bg-blue-500 h-8 w-8 cursor-pointer text-white p-1 rounded-full hover:text-blue-500 hover:bg-white transition-all duration-500'/></Link>
    <Heart   className='bg-blue-500 h-8 w-8 cursor-pointer text-white p-1 rounded-full hover:text-blue-500 hover:bg-white transition-all duration-500'/>
     </div></CardTitle>
    <CardDescription className='text-green-600 font-semibold text-lg'>{product.category.name}</CardDescription>
  
  </CardHeader>

  <CardContent>
    <p className='line-clamp-1 font-semibold'>{product.title}</p>
  </CardContent>

  <CardFooter>
    <div className='flex justify-between w-full items-center '>
      <h5 className='font-semibold'>{product.price} EGP</h5>
      <h5 className='flex gap-2'>{product.ratingsAverage}<Star className='text-yellow-400 fill-yellow-400'/></h5>
    </div>
  </CardFooter>
    <MyButton id={product._id}/>
</Card>
  </>

}
