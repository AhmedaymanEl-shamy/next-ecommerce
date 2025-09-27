    "use client"
import Image from 'next/image'
import React from 'react'
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import image1 from '../../../../public/images/slider-image-1.jpeg'
import image2 from '../../../../public/images/slider-image-2.jpeg'
import image3 from '../../../../public/images/slider-image-3.jpeg'
import { Autoplay } from 'swiper/modules';
export default function HomeSlider() {
  return <>
  
  <div className='grid grid-cols-12'>
    <div className='col-span-8'>
          <Swiper slidesPerView={1}  autoplay={{delay:2500, disableOnInteraction:false}} loop  modules={[Autoplay]}>
          <SwiperSlide><Image src={image1} alt='image1' className='h-[557px]'/></SwiperSlide>
          <SwiperSlide><Image src={image2} alt='image1' className='h-[558px]'/></SwiperSlide>
          <SwiperSlide><Image src={image3} alt='image1' className='h-[558px]'/></SwiperSlide>
            
            </Swiper> 
    </div>
    <div className='col-span-4'>
         <Image src={image2} alt='image2' height={300}/>
        <Image src={image3} alt='image3' height={300}/>
    </div>
       
  </div>
  
  </>
}
