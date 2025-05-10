"use client";
import { Product } from "../types";
import { GiRoundStar } from "react-icons/gi";
import Reviewer from "./Reviewer";

function ReviewPanel({ product }: {product: Product}) {
    return (
        <div className="w-full p-4 flex space-x-8 rounded 2xl border-2 border-gray-100">
            <div className="text-center font-semibold">
                <div className="flex justify-center text-6xl text-yellow-500">
                    <GiRoundStar/>
                </div>
                <p className="text-2xl">{product.rating} out of 5</p>
                <p className="text-sm">{product.reviews.length} Reviews</p>
            </div>
            <div className="flex flex-col grow space-y-4">
                {product.reviews.map((review, index) => <Reviewer key={index} review={review}/>)}
            </div>
        </div>
    )
}
export default ReviewPanel;