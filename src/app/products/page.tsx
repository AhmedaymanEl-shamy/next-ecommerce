import { ProductsType } from '@/types/products.types';
import React from 'react'
import Product from '../_components/Product/Product';
import getAllProducts from '@/api/products.api';
import HomeCard from '../_components/HomeCard/HomeCard';


export default async function page() {



  return <>
  
  <div className="container py-8 px-5  md:px-0">
  
      <HomeCard/>
  </div>
  
  </>
  
}
