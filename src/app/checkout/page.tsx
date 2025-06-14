"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useProductContext } from "../context/ProductProvider";
import Navbar from "../components/Navbar";
import ItemDisplay from "../components/ItemDisplay";
import PaymentPanel from "../components/PaymentPanel";
import { Suspense } from "react";

function CheckoutPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Checkout/>
        </Suspense>
    )
}
export default CheckoutPage;

function Checkout() {
    const router = useRouter();
    const products = useProductContext();
    const searchParams = useSearchParams();
    const id = Number(searchParams.get("id"));
    const quantity = Number(searchParams.get("quantity"));
    
    if (!id || !quantity) {
        router.push("/");
        return;
    }

    if (!products) return null;
    const product = products[id - 1];
    const subtotal = (quantity * product.price * ((100-product.discountPercentage)/100)).toFixed(2);

    return (
        <>
            <Navbar/>
            <div className="flex pt-26 pb-4 justify-center">
                <PaymentPanel/>
                <div className="p-3 w-1/4 h-fit space-y-4 rounded-e-2xl border-2 border-s-0 border-gray-100 dark:border-neutral-800">
                    <p className="font-bold text-3xl text-yellow-500">Payment summary</p>
                    <ItemDisplay product={product} quantity={quantity}/>
                    <div className="flex justify-between border-t-2 border-gray-100 dark:border-neutral-800 pt-3">
                        <p className="grow">Total</p>
                        <p>${subtotal}</p>
                    </div>
                </div>
            </div>
        </>
    )
}