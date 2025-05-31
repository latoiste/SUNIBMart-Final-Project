"use client";

import { Dispatch, SetStateAction } from "react";
import { Product } from "../types";

function Counter({ disabled, product, quantity, setQuantity }: {disabled?: boolean, product: Product, quantity: number, setQuantity: Dispatch<SetStateAction<number>>}) {
    function increment() {
        if (quantity < product.stock) {
            setQuantity(quantity + 1);
        }
    }

    function decrement() {
        if (quantity > product.minimumOrderQuantity)
            setQuantity(quantity - 1);
    }

    return (
        <div className="min-w-28 w-1/2 h-auto flex items-center rounded-md border-2 border-gray-100 font-semibold">
            <p onClick={decrement} className={`counterButton rounded-s-md ${quantity > product.minimumOrderQuantity ? "hover:cursor-pointer" : "hover:cursor-not-allowed"}`}>-</p>
            <p className="h-8 flex grow items-center justify-center border-x-2 border-gray-100">{disabled ? "-" : `${quantity}`}</p>
            <p onClick={increment} className={`counterButton rounded-e-md ${quantity < product.stock ? "hover:cursor-pointer" : "hover:cursor-not-allowed"}`}>+</p>
        </div>
    )
}
export default Counter;