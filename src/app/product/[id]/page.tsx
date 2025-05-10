"use client";
import ActionPanel from "@/app/components/ActionPanel";
import ImageList from "@/app/components/ImageList";
import Navbar from "@/app/components/Navbar";
import ProductDescription from "@/app/components/ProductDescription";
import ProductSpecifics from "@/app/components/ProductSpecifics";
import ReviewPanel from "@/app/components/ReviewPanel";
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
            <div className="pt-26 flex justify-center-safe gap-4">
                <ImageList images={product.images}/>
                <div className="flex-col">
                    <div className="flex h-fit space-x-4">
                        <ProductDescription product={product}/>
                        <ActionPanel product={product}/>
                    </div>
                    <ProductSpecifics product={product}/>
                </div>
            </div>
            <ReviewPanel product={product}/>
        </>
    );
}
export default ProductDetail;