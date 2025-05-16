import { useEffect, useState } from "react";
import { CartItem } from "../types";
import ItemDisplay from "./ItemDisplay";
import { useUserContext } from "../context/UserProvider";

function CartDisplay({ item }: {item: CartItem}) {
    const [quantity, setQuantity] = useState(item.quantity);
    const user = useUserContext();

    useEffect(() => {
        user?.updateCart(item, quantity);
    }, [quantity]);

    return (
        <>
            <ItemDisplay product={item.product} quantity={quantity} setQuantity={setQuantity} showCounter={true}/>
            <button onClick={() => user?.removeItem(item)} className="btn-filled btn-filled--remove">Remove Item</button>
        </>
    )
}
export default CartDisplay;