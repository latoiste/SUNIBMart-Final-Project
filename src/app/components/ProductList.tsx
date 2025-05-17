import Card from "./Card";
import { Product } from "../types";

//just displays all items in card
//loops through all productContext
//assigns each to Card as props
function ProductList({ products }: {products: Product[]}) {
    const list = products?.map(product => <Card key={product.id} product={product}/>)
    
    return (
        <div className="flex flex-wrap space-y-4 space-x-4 justify-center">
            {list}
        </div>
    )
}
export default ProductList;