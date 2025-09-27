import React from 'react'
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProductsType } from '@/types/products.types';

export default function ProductDetails({productDetails}:{productDetails:ProductsType}) {
  return <>
  
   <div className='col-span-4'>
            <img src={productDetails.imageCover} className='w-full'  alt='' />
        </div>
        <div className='col-span-8 space-y-4'>
            <h2 className='text-2xl font-semibold'>{productDetails.title}</h2>
            <h3 className='text-blue-500 text-lg'>{productDetails.category.name}</h3>
            <p>{productDetails.description}</p>
            <div className='flex justify-between w-full items-center '>
      <h5 className='font-semibold'>{productDetails.price} EGP</h5>
      <h5 className='flex gap-2'>{productDetails.ratingsAverage}<Star className='text-yellow-400 fill-yellow-400'/></h5>
    </div>
     <Button className='bg-blue-500 w-full hover:text-blue-500 hover:bg-white hover:outline-2 hover:outline-blue-500 hover:outline-solid transition-all cursor-pointer'>Add to cart</Button>
        </div>
  
  </>

}