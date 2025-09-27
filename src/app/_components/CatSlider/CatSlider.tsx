"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { CatagoryType } from '@/types/products.types';
export default function CatSlider({allCategors}:{allCategors:CatagoryType[]}) {

  return <>
  
    <Swiper slidesPerView={7} spaceBetween={5} autoplay={{delay:2500, disableOnInteraction:false}} loop  modules={[Autoplay]}>
            
       {allCategors.map((category)=><SwiperSlide key={category.name}>
        {/* <img src={category.image} alt={category.name} className='w-full object-cover h-50'  /> */}
        <Image src={category.image} alt={category.name} width={500} height={500}  className='w-full object-cover h-50'/>
        <h3 className='font-semibold text-md'>{category.name}</h3></SwiperSlide>)}
              
              </Swiper> 
  </>
}
