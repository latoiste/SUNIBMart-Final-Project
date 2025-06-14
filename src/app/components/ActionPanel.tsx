"use client";
import { useEffect, useState } from "react";
import { CartItem, Product } from "../types";
import { useRouter } from "next/navigation";
import { useUserContext } from "../context/UserProvider";
import Counter from "./Counter";
import { BarLoader } from "react-spinners";

function ActionPanel({ product }: {product: Product}) {
    const [quantity, setQuantity] = useState(product.minimumOrderQuantity);
    const [loading, setLoading] = useState(false)
    const [text, setText] = useState("Add to cart");
    const outOfStock = product.availabilityStatus === "Out of Stock" || product.minimumOrderQuantity > product.stock;
    const subtotal = (quantity * product.price * ((100-product.discountPercentage)/100)).toFixed(2);
    const router = useRouter();
    const user = useUserContext();

    function handleShoppingCart() {
        if (user.loggedIn) {
            const item: CartItem = {
                product: product,
                quantity: quantity,
                price: Number(subtotal),
            }
            const shoppingCart: CartItem[] | undefined = user.user?.shoppingCart;
            const duplicateItem: CartItem | undefined = shoppingCart?.find(cartItem => cartItem.product.id === item.product.id);
            
            duplicateItem ? user.updateCart(item, item.quantity) : user.addToCart(item);
        }
    }

    useEffect(() => {
        if (text !== "Add to cart") {
            const timeout = setTimeout(() => setText("Add to cart"), 1500);
    
            return () => clearTimeout(timeout);
        }
    }, [text]);

    return (
        <div className="w-64 h-90 p-4 space-y-5 rounded-xl border-2 border-gray-100 dark:border-neutral-800">
            <p className="text-3xl font-semibold">Order</p>
            <Counter product={product} quantity={quantity} setQuantity={setQuantity} disabled={outOfStock}/>
            <p>Stock: {product.stock}</p>
            <div className="flex">
                <p className="flex-1">Subtotal</p>
                <p>${subtotal}</p>
            </div>
            <p>{product.shippingInformation}</p>

            <button disabled={outOfStock} onClick={() => {
                setLoading(true);
                user.loggedIn ? router.push(`/checkout?id=${product.id}&quantity=${quantity}`) : router.push("/register");
            }} 
                className={`btn-filled ${outOfStock ? "btn-filled--gray" : ""}`}>{loading ? <BarLoader color="white"/> : "Checkout"}</button>
            
            <button disabled={outOfStock} onClick={() => {
                user.loggedIn ? setText("Added to cart!") : router.push("/register");
                handleShoppingCart();
            }} 
                className={`btn-filled ${outOfStock ? "btn-filled--gray" : ""}`}>{text}</button>
        </div>
    )
}
export default ActionPanel;