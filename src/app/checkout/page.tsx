"use client";
import { useSearchParams } from "next/navigation";
import { useProductContext } from "../context/ProductProvider";
import Navbar from "../components/Navbar";
import ItemCheckout from "../components/ItemCheckout";

function Checkout() {
    const searchParams = useSearchParams();
    const id = Number(searchParams.get("id"));
    const quantity = Number(searchParams.get("quantity"));
    
    const products = useProductContext();
    if (!products) return null;
    const product = products[id - 1];
    const subtotal = (quantity * product.price * ((100-product.discountPercentage)/100)).toFixed(2);
    
    // TODO: make error page if id and quantity inst given or id isnt found
    return (
        <>
            <Navbar/>
            <div className="flex pt-24 gap-4 justify-center">
                {/* Payment method 
                email address
                shipping address
                payment method
                */}

                <div className="border-2 border-gray-100 p-1">
                    <p className="ps-3 pb-3 text-3xl font-semibold">Payment summary</p>
                    <ItemCheckout product={product} quantity={quantity}/>
                    <div className="flex px-3">
                        <p className="grow">Total</p>
                        <p>${subtotal}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Checkout;