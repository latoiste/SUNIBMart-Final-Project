"use client"
import { createContext, useState } from "react";

interface Product {
    id: number,
    title: string,
    description: string,
}

const ProductContext = createContext<Product | null>(null);

function AppWrapper({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    const [product, setProduct] = useState<Product | null>(null)

    return (
        <ProductContext.Provider value={product}>
            {children}
        </ProductContext.Provider>
    )
}

export default AppWrapper
