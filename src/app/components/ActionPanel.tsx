"use client";
import { useState } from "react";
import { CartItem, Product } from "../types";
import { useRouter } from "next/navigation";
import { useUserContext } from "../context/UserProvider";
import Counter from "./Counter";

function ActionPanel({ product }: {product: Product}) {
    const [quantity, setQuantity] = useState(product.minimumOrderQuantity);
    const subtotal = (quantity * product.price * ((100-product.discountPercentage)/100)).toFixed(2);
    const router = useRouter();
    const user = useUserContext();

    function handleShoppingCart() {
        if (user?.loggedIn) {
            const item: CartItem = {
                product: product,
                quantity: quantity,
                price: Number(subtotal),
            }
            const shoppingCart: CartItem[] | undefined = user.user?.shoppingCart;
            const duplicateItem: CartItem | undefined = shoppingCart?.find(cartItem => cartItem.product.id === item.product.id);
            
            duplicateItem ? user.updateCart(item, item.quantity) : user.addToCart(item);
        }
        else {
            router.push("/register");
        }
    }

    return (
        <div className="w-64 h-90 p-4 space-y-5 rounded-xl border-2 border-gray-100">
            <p className="text-3xl font-semibold">Order</p>
            {/* TODO: tidy up counter check for availabilitystatus*/}
            <Counter product={product} quantity={quantity} setQuantity={setQuantity}/>
            <p>Stock: {product.stock}</p>
            <div className="flex">
                <p className="flex-1">Subtotal</p>
                <p>${subtotal}</p>
            </div>
            <p>{product.shippingInformation}</p>
            <button onClick={() => router.push(`/checkout?id=${product.id}&quantity=${quantity}`)} className="btn-filled">Checkout</button>
            <button onClick={() => handleShoppingCart()} className="btn-filled">Add to cart</button>
        </div>
    )
}
export default ActionPanel;