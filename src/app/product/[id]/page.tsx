"use client";
import Navbar from "@/app/components/Navbar";
import { useProductContext } from "@/app/context/ProductContext";
import { use } from "react";

// extract params dari props
// di dalam params, ada attribute id
function ProductDetail({ params }: {params: {id: number}}) {
    const products = useProductContext();
    const id = use(params).id;

    if (!products) return null;

    const product = products[id-1];
    
    return (
    <div>
        <Navbar/>
        <h1>HIIII {id}</h1>
        {/* <h1>{product.title}</h1> */}
        <img src={product.thumbnail} alt="" />
    </div>
    );
}
export default ProductDetail;