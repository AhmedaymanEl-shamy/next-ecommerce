export type ProductsType = {
    sold:number,
    images:[],
    subcategory:SubcategoryType[],
    ratingsQuantity:number,
    _id:string,
    title:string,
    slug:string,
    description:string,
    quantity:number,
    price:number,
    imageCover:string,
    category:CatagoryType,
    brand:BrandType,
    ratingsAverage:number,
    createdAt:string,
    updatedAt:string,
    id:string,
 }



 type SubcategoryType={
    _id:string,
    name:string,
    slug:string,
    category:string,
 }

  export type CatagoryType={
    _id:string,
    name:string,
    slug:string,
    image:string,
 }

 type BrandType={
     _id:string,
    name:string,
    slug:string,
    image:string,
 }