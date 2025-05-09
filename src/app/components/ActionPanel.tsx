"use client";
import { useState } from "react";
import Product from "../types";
import { useRouter } from "next/navigation";

function ActionPanel({ product }: {product: Product}) {
    const [amount, setAmount] = useState(product.minimumOrderQuantity);
    const router = useRouter();
    const subtotal = (amount * product.price * ((100-product.discountPercentage)/100)).toFixed(2);

    function increment() {
        if (amount < product.stock)
            setAmount(amount + 1);
    }

    function decrement() {
        if (amount > product.minimumOrderQuantity)
            setAmount(amount - 1);
    }

    return (
        <div className="w-64 h-90 p-4 space-y-5 rounded-xl border-2 border-gray-100">
            <p className="text-3xl font-semibold">Order</p>
            {/* TODO: tidy up counter */}
            <div className="w-32 h-8 flex items-center rounded-md border-2 border-gray-100 font-semibold">
                <p onClick={decrement} className={`counterButton rounded-s-md ${amount > product.minimumOrderQuantity ? "hover:cursor-pointer" : "hover:cursor-not-allowed"}`}>-</p>
                <p className="h-8 flex grow items-center justify-center border-x-2 border-gray-100">{amount}</p>
                <p onClick={increment} className={`counterButton rounded-e-md ${amount < product.stock ? "hover:cursor-pointer" : "hover:cursor-not-allowed"}`}>+</p>
            </div>
            <p>Stock: {product.stock}</p>
            <div className="flex">
                <p className="flex-1">Subtotal</p>
                <p>${subtotal}</p>
            </div>
            <p>{product.shippingInformation}</p>
            {/* pass in like subtotal to ??? */}
            <button onClick={() => router.push(`/checkout?id=${product.id}&amount=${amount}`)} className="checkoutButton">Checkout</button>
            {/* TODO: add to shopping cart function */}
            <button className="checkoutButton">Add to cart</button>
        </div>
    )
}
export default ActionPanel;