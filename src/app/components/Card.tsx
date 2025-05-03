"use client";
import { useRouter } from "next/navigation";
import Product from "../types"

function Card({ product }: {product: Product | null}) {
    //make a loading card
    if (!product) {
        return (
            <div className="bg-gray-100 rounded-xl border-2 border-gray-100 w-60 h-95 flex-col">
                AAAAAAAAAAAAAAa
            </div>
        )
    }

    const router = useRouter();

    return (
        <div onClick={() => router.push(`/product/${product.id}`)} className="hover: cursor-pointer bg-gray-100 rounded-xl border-2 border-black w-60 h-100 my-2">
            <img src={product.thumbnail} alt="MMMMMMMMMMMMM" className="w-[237px] h-[237px] bg-white rounded-xl"/>
            <p className="pl-2 flex">{product.title}</p>
            <p className="pl-2 font-bold text-2xl">${(product.price * ((100-product.discountPercentage)/100)).toFixed(2)}</p>
            {product.discountPercentage > 0 && (
                <div className="pl-2 flex">
                    <p className="line-through">${product.price}</p>
                    <p className="pl-2 text-red-500">{product.discountPercentage}%</p>
                </div>
            )}
            {/* ganti Rating jadi bintang */}
            <p className="pl-2">Rating {product.rating}</p>
            <p className="pl-2">{product.shippingInformation}</p>
        </div>
    )
}
export default Card

function averageReview(product: Product) {
    var sum = 0;
    product.reviews.forEach(review => {
        sum += review.rating;
    });
    return (sum/product.reviews.length).toFixed(1);
}