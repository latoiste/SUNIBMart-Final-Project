import { Product } from "../types";

function ProductDescription({ product }: {product: Product}) {
    return (
        <div className="w-96">
            <p className="font-semibold text-4xl">{product.title}</p>
            <p className="pt-2 font-bold text-3xl">${(product.price * ((100-product.discountPercentage)/100)).toFixed(2)}</p>
            {product.discountPercentage > 0 && (
                <div className="flex pt-2">
                    <p className="line-through text-gray-400">${product.price}</p>
                    <p className="flex items-center mx-3 px-1 text-sm text-red-500 rounded-md bg-red-200">{product.discountPercentage}%</p>
                </div>
            )}
            <p className="pt-4 font-semibold">{product.description}</p>
            {product.brand && <p className="pt-4 font-semibold">Brand: {product.brand}</p>}
            <p className="pt-4 font-semibold">Minimum order quantity: {product.minimumOrderQuantity}</p>
        </div>
    )
}
export default ProductDescription;