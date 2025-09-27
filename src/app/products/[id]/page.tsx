import getProductDetailes from '@/api/ProductDetails.api'
import { getRelatedProduct } from '@/api/relatedProducts.api'
import ProductDetails from '@/app/_components/productDetails/ProductDetails'
import Productswiper from '@/app/_components/ProductSwiper/ProductSwiper'
import { ProductsType } from '@/types/products.types'
import React from 'react'




export default async function page({params}:{params:Promise<{id:string}>}) {


    const {id} = await params
    


    const productDetails:ProductsType = await getProductDetailes(id)
    const relatedProduct:ProductsType[] = await getRelatedProduct(productDetails.category._id)
    
  return <>
  
  <div className="container py-8">
    <div className='grid grid-cols-12 gap-8'>

       <ProductDetails productDetails={productDetails}/>
    </div>

<h2 className='font-semibold  my-5 text-3xl'>related products</h2>

<Productswiper  relatedProduct={relatedProduct}/>

  </div>
  
  </>
 
  
}
