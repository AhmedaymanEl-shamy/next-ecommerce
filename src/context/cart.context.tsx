"use client";
import { getProductFromCart } from "@/api/cart.api";
import { ProductsType } from "@/types/products.types";
import { createContext, useEffect, useState, ReactNode } from "react";

type Product = {
    count: number,
    _id: string,
    price: number,
     product:ProductsType,
};

type CartContextType = {
  numOfCartItem: number | null;
  setNumOfCartItem: React.Dispatch<React.SetStateAction<number | null>>;
  totalPrice: number;
  setTotalPrice: React.Dispatch<React.SetStateAction<number>>;
  allProducts: Product[];
  setAllProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  handleCart: () => Promise<CartDataResponse>; // You can replace `any` with the actual return type of getProductFromCart
};


type CartDataResponse={
    status:string,
    numOfCartItem:number,
    cartId:string,
    data:{
        products:Product[]
    }
}





export const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [numOfCartItem, setNumOfCartItem] = useState<number | null>(null);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  async function handleCart() {
    const data = await getProductFromCart();

    setAllProducts(data.data.products);
    let sum = 0;
    data.data.products.forEach((product: Product) => {
      sum += product.count;
    });
    setNumOfCartItem(sum);
    setTotalPrice(data.data.totalCartPrice);

    return data;
  }

  useEffect(() => {
    handleCart();
  }, []);

  return (
    <CartContext.Provider
      value={{
        numOfCartItem,
        setNumOfCartItem,
        totalPrice,
        setTotalPrice,
        allProducts,
        setAllProducts,
        handleCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
