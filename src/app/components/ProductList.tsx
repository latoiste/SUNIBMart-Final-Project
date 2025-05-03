import Card from "./Card";
import { useProductContext } from "../context/ProductContext";

//just displays all items in card
//loops through all productContext
//assigns each to Card as props
function ProductList() {
    const products = useProductContext();
    const list = products?.map(product => <Card key={product.id} product={product}></Card>)
    return (
        <div className="flex flex-wrap space-x-4">
            {list}
        </div>
    )
}
export default ProductList