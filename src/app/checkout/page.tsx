"use client";
import { useSearchParams } from "next/navigation";
import { useProductContext } from "../context/ProductContext";
import Navbar from "../components/Navbar";
import CheckoutDisplay from "../components/CheckoutDisplay";

function Checkout() {
    const searchParams = useSearchParams();
    const id = Number(searchParams.get("id"));
    const amount = Number(searchParams.get("amount"));

    const products = useProductContext();
    if (!products) return null;
    const product = products[id - 1];
    // TODO: make error page if id and amount inst given or id isnt found
    return (
        <>
            <Navbar/>
            <div className="pt-24">
                <CheckoutDisplay product={product} amount={amount}/>
            </div>
        </>
    )
}
export default Checkout;