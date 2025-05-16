"use client";
import { Dispatch, SetStateAction } from "react";
import { Product } from "../types";
import Counter from "./Counter";

function ItemDisplay({ product, quantity, setQuantity, showCounter = false }: {product: Product, quantity: number, setQuantity: Dispatch<SetStateAction<number>>, showCounter: boolean}) {
    const subtotal: string = (quantity * product.price * ((100-product.discountPercentage)/100)).toFixed(2)

    return (
        <div className="flex w-full h-auto space-x-2">
            <img className={`border-e-2 border-gray-100 size-24`} src={product.thumbnail} alt={product.title} />
            <div className="w-full h-auto flex flex-col justify-between">
                <div className="flex space-x-2 h-fit justify-between">
                    <p className="font-semibold">{product.title}</p>
                    <p className="flex h-full items-center px-2 font-semibold">x{quantity}</p>
                </div>
                {showCounter && setQuantity &&
                    <Counter product={product} quantity={quantity} setQuantity={setQuantity}></Counter>
                }
                <div className="flex space-x-2">
                    <p>Subtotal</p>
                    <p>${subtotal}</p>
                </div>
            </div>
        </div>
    )
}
export default ItemDisplay;