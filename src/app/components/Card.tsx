"use client";
import { useRouter } from "next/navigation";
import { Product } from "../types"
import { GiRoundStar } from "react-icons/gi";
import { useState } from "react";
import LoadingOverlay from "./LoadingOverlay";

function Card({ product }: {product: Product}) {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    return (
        <>
            <div onClick={() => {
                router.push(`/product/${product.id}`);
                setLoading(true);
                }} 
                className="hover: cursor-pointer relative bg-gray-100 dark:bg-neutral-800 rounded-xl border-2 border-gray-100 dark:border-neutral-800 w-45 h-90">
                
                {loading ? <LoadingOverlay/> : null}
                <img loading="lazy" src={product.thumbnail} alt={product.title} className="w-[178px] h-[178px] bg-white dark:bg-black rounded-xl"/>
                <p className="pl-2 flex">{product.title}</p>
                <p className="pl-2 font-bold text-2xl">${(product.price * ((100-product.discountPercentage)/100)).toFixed(2)}</p>
                {product.discountPercentage > 0 && (
                    <div className="pl-2 flex">
                        <p className="line-through">${product.price}</p>
                        <p className="pl-2 text-red-500 dark:text-red-400">{product.discountPercentage}%</p>
                    </div>
                )}
                <p className="pl-2 flex items-center"><GiRoundStar className="text-yellow-500 me-1"/>{product.rating}</p>
                <p className="pl-2">{product.shippingInformation}</p>
            </div>
        </>
    )
}
export default Card;