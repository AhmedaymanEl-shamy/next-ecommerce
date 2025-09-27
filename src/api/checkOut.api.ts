import { CheckOutType } from "@/schema/checkOut.shema"
import getMyToken from "@/utilities/GetMyToken"

export async function makeOnlinePayment(cartId:string,domain:string,formValues:CheckOutType){
   const token = await getMyToken()
  const response = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=${domain}`,{
    method:'POST',
    headers:{
       token:`${token}`,
        "Content-Type":"application/json"
    },
    body:JSON.stringify({
        shippingAddress:formValues
    })
  })
  const data = await response.json()

  return data
}
export async function makeCashPayment(cartId:string,formValues:CheckOutType){
   const token = await getMyToken()
  const response = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/${cartId}`,{
    method:'POST',
    headers:{
      token:`${token}`,
        "Content-Type":"application/json"
    },
    body:JSON.stringify({
        shippingAddress:formValues
    })
  })
  const data = await response.json()

  return data
}