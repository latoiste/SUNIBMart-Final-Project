"use client";
import CartDisplay from "../components/CartDisplay";
import ItemDisplay from "../components/ItemDisplay";
import Navbar from "../components/Navbar"
import { useUserContext } from "../context/UserProvider"

function Cart() {
    const user = useUserContext();
    const shoppingCart = user?.user?.shoppingCart;

    return (
        <>
            <Navbar/>
            <div className="flex justify-center pt-24">
                {shoppingCart?.map(item => {
                    return <CartDisplay key={item.product.id} item={item}></CartDisplay>
                })}
            </div>
        </>
    )
}
export default Cart