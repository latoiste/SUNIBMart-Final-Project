import Card from "./Card";
import { useProductContext } from "../context/ProductProvider";

//just displays all items in card
//loops through all productContext
//assigns each to Card as props
function ProductList() {
    const products = useProductContext();
    const list = products?.map(product => <Card key={product.id} product={product}/>)
    
    return (
        <div className="flex flex-wrap space-x-4 justify-center">
            {list}
        </div>
    )
}
export default ProductList