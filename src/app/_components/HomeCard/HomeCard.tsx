import getAllProducts from '@/api/products.api'
import { ProductsType } from '@/types/products.types'
import React from 'react'
import Product from '../Product/Product'

export default async function HomeCard() {
      const allProduct:ProductsType[] = await getAllProducts()
  return <>
      <div className="grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  grid-cols-2 xl:grid-cols-5 gap-5">
      {allProduct.map((product)=><Product key={product._id} product={product}/>)}
    </div>

  
  
  </>
}
