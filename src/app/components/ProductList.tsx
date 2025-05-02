import Card from "./Card";
import { useProductContext } from "../context/ProductContext";

//just displays all items in card
//loops through all productContext
//assigns each to Card as props
function ProductList() {
    const products = useProductContext();

}
export default ProductList