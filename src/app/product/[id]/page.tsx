"use client";
import ActionPanel from "@/app/components/ActionPanel";
import ImageList from "@/app/components/ImageList";
import Navbar from "@/app/components/Navbar";
import { useProductContext } from "@/app/context/ProductContext";
import { use } from "react";

// extract params dari props
// di dalam params, ada attribute id
function ProductDetail({ params }: {params: {id: number}}) {
    const id = use(params).id;
    const products = useProductContext();
    if (!products) return null;
    const product = products[id-1];
    
    return (
        <>
            <Navbar/>
            <div className="pt-24 flex gap-4 justify-center">
                <ImageList images={product.images}/>
                <div className="w-96">
                    <p className="font-bold text-4xl">{product.title}</p>
                    <p className="font-bold">{product.title}</p>
                </div>
                <ActionPanel product={product}/>
            </div>
        </>
    );
}
export default ProductDetail;