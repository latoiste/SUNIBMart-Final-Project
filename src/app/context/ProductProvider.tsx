"use client"
import { createContext, useContext, useEffect, useState } from "react";
import { Product } from "../types";
import axios from "axios";

const ProductContext = createContext<Product[] | null>(null);

export function useProductContext() {
    const product = useContext(ProductContext);
    if (!product) {
        return null;
    }
    return product;
}

function ProductProvider({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    const [product, setProduct] = useState<Product[] | null>(null)
    
    useEffect(() => {
        const data = localStorage.getItem("ProductData")

        if (!data) {
            axios.get("https://dummyjson.com/products?limit=0")
                .then((Response) => {
                    setProduct(Response.data.products);
                    localStorage.setItem("ProductData", JSON.stringify(Response.data.products))
                })
                .then(console.log)
                .catch((error) => console.error(error))
                console.log("Fetched Data!")
            }
        else {
            setProduct(JSON.parse(data))
        }
    }, [])

    return (
        <ProductContext.Provider value={product}>
            {children}
        </ProductContext.Provider>
    )
}
export default ProductProvider
