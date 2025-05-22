import Card from "./Card";
import { Product } from "../types";

function ProductList({ products }: {products: Product[]}) {
    const list = products?.map(product => <Card key={product.id} product={product}/>)
    
    return (
        <div className="flex flex-wrap space-y-4 space-x-4 justify-start-safe">
            {list}
        </div>
    )
}
export default ProductList;