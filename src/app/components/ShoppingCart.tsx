"use client";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useRouter } from "next/navigation";

function ShoppingCart() {
    const router = useRouter()

    return (
        <div className="text-4xl p-1 w-auto text-yellow-500 rounded-xl transition duration-100 hover:bg-gray-200 dark:hover:bg-neutral-700">
            <AiOutlineShoppingCart onClick={() => router.push("/checkout/cart")}/>
        </div>
    )
    // return (
    //     <div className="flex justify-center">
    //         <AiOutlineShoppingCart onClick={() => router.push("/checkout/cart")} className="text-4xl p-1 h-full w-auto text-yellow-500 rounded-xl transition duration-100 hover:bg-gray-200 dark:hover:bg-neutral-700"/>
    //     </div>
    // )
}
export default ShoppingCart;