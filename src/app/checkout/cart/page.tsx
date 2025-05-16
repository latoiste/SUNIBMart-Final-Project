"use client";
import { useEffect, useState } from "react";
import CartDisplay from "../../components/CartDisplay";
import ItemDisplay from "../../components/ItemDisplay";
import Navbar from "../../components/Navbar"
import { useUserContext } from "../../context/UserProvider"

function Cart() {
    const [total, setTotal] = useState(0);
    const user = useUserContext();
    const shoppingCart = user?.user?.shoppingCart;
    
    useEffect(() => {
        let prices = Number(shoppingCart?.reduce((price, item) => price + item.price, 0).toFixed(2));
        prices ? setTotal(prices) : setTotal(0);
    }, [shoppingCart]);

    return (
        <>
            <Navbar/>
            <div className="flex justify-center pt-24">
                <div className="w-1/3 flex space-y-4">
                    <div>
                        AAAAAAAa
                    </div>
                    <div className="p-3 space-y-4 rounded-e-2xl border-2 border-gray-100">
                        <p className="font-bold text-3xl text-yellow-500">Your Cart</p>
                        {shoppingCart?.map(item => {
                            return <CartDisplay key={item.product.id} item={item}></CartDisplay>
                        })}
                        <div className="flex justify-between">
                            <p>Total</p>
                            <p>${total}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Cart