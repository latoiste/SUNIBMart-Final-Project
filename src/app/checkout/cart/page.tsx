"use client";
import { useEffect, useState } from "react";
import CartDisplay from "../../components/CartDisplay";
import Navbar from "../../components/Navbar"
import { useUserContext } from "../../context/UserProvider"
import { useRouter } from "next/navigation";
import PaymentPanel from "@/app/components/PaymentPanel";

function Cart() {
    const user = useUserContext();
    const router = useRouter();
    const [total, setTotal] = useState("0");
    const shoppingCart = user.user?.shoppingCart;
    
    useEffect(() => {
        let prices = shoppingCart?.reduce((price, item) => price + item.price, 0).toFixed(2);
        prices ? setTotal(prices) : setTotal("0");
    }, [shoppingCart]);

    if (!user.loggedIn) router.push("/register");

    return (
        <>
            <Navbar/>
            <div className="flex justify-center pt-26 pb-4">
                <PaymentPanel/>
                <div className="p-3 w-1/4 h-fit space-y-4 rounded-e-2xl border-2 border-gray-100">
                    <p className="font-bold text-3xl text-yellow-500">Your Cart</p>
                    {shoppingCart?.map(item => {
                        return <CartDisplay key={item.product.id} item={item}></CartDisplay>
                    })}
                    <div className="flex justify-between border-t-2 border-gray-100 pt-3">
                        <p>Total</p>
                        <p>${total}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Cart