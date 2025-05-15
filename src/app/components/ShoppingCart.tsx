import { AiOutlineShoppingCart } from "react-icons/ai";
import { useUserContext } from "../context/UserProvider";
import { useEffect, useState } from "react";
import ItemDisplay from "./ItemDisplay";
import { useRouter } from "next/navigation";

function ShoppingCart() {
    const [show, setShow] = useState(false);
    const user = useUserContext();
    const shoppingCart = user?.user?.shoppingCart;
    const router = useRouter()

    return (
        <div className="flex justify-center">
            <AiOutlineShoppingCart onClick={() => router.push("/cart")} onMouseEnter={() => setShow(true)} className="text-4xl p-1 h-full w-auto text-yellow-500 rounded-xl transition duration-100 hover:bg-gray-200"/>
            {/* {show && 
                <div onMouseLeave={() => setShow(false)} className="absolute top-4/5 p-2 border-2 border-black">
                    {shoppingCart?.map((item, index) => <ItemDisplay key={index} product={item.product} quantity={item.quantity}></ItemDisplay>)}
                </div>} */}
        </div>
    )
}
export default ShoppingCart;