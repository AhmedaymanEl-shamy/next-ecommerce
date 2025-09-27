import { getCategory } from '@/api/category.api';
import React from 'react'
import 'swiper/css';

import { CatagoryType } from '@/types/products.types';
import CatSlider from '../CatSlider/CatSlider';


export default async function CategorySlider() {


const allCategors:CatagoryType[] = await getCategory()

  return <>
            <h2 className='text-3xl font-semibold'>All Categories</h2>
            <CatSlider allCategors={allCategors}/>
  </>
}
