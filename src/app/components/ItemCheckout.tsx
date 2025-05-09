import { Product } from "../types";

function ItemCheckout({ product, amount }: {product: Product, amount: number}) {
    // products.product
    return (
        <div className="w-96 h-36 space-x-2 flex">
            <img className="border-e-2 border-gray-100 h-full w-auto" src={product.thumbnail} alt={product.title} />
            <div className="h-36 flex flex-col">
                <div className="flex h-fit">
                    <p className="font-semibold">{product.title}</p>
                    <p className="flex h-full items-center px-2 font-semibold">x{amount}</p>
                </div>
                <div className="flex grow pe-2 items-center">
                    <p className="grow">Subtotal</p>
                    <p className="">${(amount * product.price * ((100-product.discountPercentage)/100)).toFixed(2)}</p>
                </div>
            </div>
        </div>
    )
}
export default ItemCheckout;