"use client";
import ActionPanel from "@/app/components/ActionPanel";
import ImageList from "@/app/components/ImageList";
import Navbar from "@/app/components/Navbar";
import ProductDescription from "@/app/components/ProductDescription";
import ProductSpecifics from "@/app/components/ProductSpecifics";
import ReviewPanel from "@/app/components/ReviewPanel";
import { useProductContext } from "@/app/context/ProductProvider";
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
            <div className="pt-26 pb-4 flex justify-center-safe gap-4">
                <div className="w-fit space-y-4">
                    <div className="flex space-x-4">
                        <ImageList images={product.images}/>
                        <div className="space-y-2">
                            <div className="flex min-h-100 h-fit space-x-4">
                                <ProductDescription product={product}/>
                                <ActionPanel product={product}/>
                            </div>
                            <ProductSpecifics product={product}/>
                        </div>
                    </div>
                    <ReviewPanel product={product}/>
                </div>
            </div>
        </>
    );
}
export default ProductDetail;