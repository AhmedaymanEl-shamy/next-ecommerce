"use server"
import getMyToken from "@/utilities/GetMyToken";


export default async function addProductToCart(id:string){

const token = await getMyToken()

  const response = await fetch('https://ecommerce.routemisr.com/api/v1/cart',{
        method:'POST',
        body:JSON.stringify({
         productId:id
        }),
        headers:{
            token:`${token}`,
            "Content-Type":"application/json"
        }
    })

    const data = response.json()

    return data
}

 export async function getProductFromCart(){
 const token = await getMyToken()
   const response = await fetch('https://ecommerce.routemisr.com/api/v1/cart',{
        headers:{
            
            token:`${token}`
        }
    }    
    )

    const data =await response.json()

    return data
}


export async function clearProductFromCart(id:string){
  const token  =  await getMyToken()
   const response = await fetch(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{
        method:'DELETE',
        headers:{
           token:`${token}`
        }
    })

    const data = await response.json()  
    return data
}


export async function updateCartCount(id:string,newCount:number){
   const token = await getMyToken()
    const response = await fetch(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{
        method:'PUT',
        body:JSON.stringify({
            count:String(newCount)
        }),
        headers:{
            token:`${token}`,
            "Content-Type":"application/json"
        }
    })

    const data = response.json()
    
    return data
}


 export async function clearCart(){
   const token = await getMyToken()
 const response = await fetch('https://ecommerce.routemisr.com/api/v1/cart',{
        method:'DELETE',
        headers:{
            token:`${token}`
        }
    })


    const data= await response.json()

return data
}