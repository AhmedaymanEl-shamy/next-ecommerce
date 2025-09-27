
 export type CartType ={
    cartId:string,
    data:CartDataType,
    numOfCartItems:number,
    status:string
}


type CartDataType={
    cartOwner:string,
    createdAt:string,
    products:CartProductType[],
    totalCartPrice:number,
    updatedAt:string,
    _id:string

}

 export type CartProductType={
    count:number,
    price:number,
    product:CartProductProductType

    
}

type CartProductProductType={
        title:string,
        imageCover:string,
        id:string
}

