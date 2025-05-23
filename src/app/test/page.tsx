"use client";
import Navbar from "../components/Navbar"
import { useProductContext } from "../context/ProductProvider"

function Test() {
    const products = useProductContext();
    const brands: string[] = [];
    
    products?.forEach(product => {
        const brand = product.brand;
        if (brand && !brands.includes(brand)) {
            brands.push(brand);
        }
    });
    console.log(brands)

    return (
        <>
            <Navbar/>
            <h1 className="p-10">YOOOO</h1>
        </>
    )
}

export default Test
