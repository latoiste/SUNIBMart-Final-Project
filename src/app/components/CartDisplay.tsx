import { useEffect, useState } from "react";
import { CartItem } from "../types";
import ItemDisplay from "./ItemDisplay";
import { useUserContext } from "../context/UserProvider";

function CartDisplay({ item }: {item: CartItem}) {
    const [quantity, setQuantity] = useState(item.quantity);
    const user = useUserContext();

    useEffect(() => {
        console.log("yoo", quantity);
        user?.updateCart(item, quantity);
        console.log(user?.user);
    }, [quantity]);

    return (
        <ItemDisplay product={item.product} quantity={quantity} setQuantity={setQuantity} showCounter={true}/>
    )
}
export default CartDisplay;