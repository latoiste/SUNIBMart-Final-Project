import { AiOutlineShoppingCart } from "react-icons/ai";
import { useUserContext } from "../context/UserProvider";

function ShoppingCart() {
    const user = useUserContext();
    
    function viewShoppingCart() {
        //check for logged in
        if (user?.loggedIn) console.log("fuck");
        else console.log("shit")
        //kalo logged in bisa muncul popup??
        //kalo ngga redirect to register page
    }

    return (
        <>
            <AiOutlineShoppingCart onMouseEnter={() => viewShoppingCart()} className="text-4xl p-1 h-full w-auto text-yellow-500 rounded-xl transition duration-100 hover:bg-gray-200"/>
        </>
    )
}
export default ShoppingCart;