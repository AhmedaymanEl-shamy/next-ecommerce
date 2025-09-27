"use client"

import { ProductsType } from '@/types/products.types';
import React from 'react'
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Product from '../Product/Product';
import { Autoplay } from 'swiper/modules';


export default function Productswiper({relatedProduct}:{relatedProduct:ProductsType[]}) {
  return <>
  <Swiper slidesPerView={5} spaceBetween={20} autoplay={{delay:2500,disableOnInteraction:false}} modules={[Autoplay]} >
{relatedProduct.map((product)=>  <SwiperSlide key={product._id}> <Product product={product}/></SwiperSlide>  )}
     
  
    
    </Swiper> 
  </>
}
