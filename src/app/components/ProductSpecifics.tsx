import { Product } from "../types";

function ProductSpecifics({ product }: {product : Product}) {
    return (
        <div className="flex justify-around p-2 space-x-4 border-y-2 border-gray-100 dark:border-neutral-800 text-sm text-center">
            <div className="w-24">
                <p className="font-semibold">Dimensions</p>
                <p>{product.dimensions.width} x {product.dimensions.height} x {product.dimensions.depth} inches</p>
            </div>
            <div className="w-24">
                <p className="font-semibold">Weight</p>
                <p>{product.weight} pounds</p>
            </div>
            <div className="w-24">
                <p className="font-semibold">Return policy</p>
                <p>{product.returnPolicy}</p>
            </div>
            <div className="w-24">
                <p className="font-semibold">Warranty</p>
                <p>{product.warrantyInformation}</p>
            </div>                        
        </div>
    )
}
export default ProductSpecifics;