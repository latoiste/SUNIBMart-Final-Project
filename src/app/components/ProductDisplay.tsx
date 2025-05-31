import { FaSearch } from "react-icons/fa";
import ProductList from "./ProductList";
import { Product } from "../types";
import { useFilterContext } from "../context/FilterProvider";
import { useSortContext } from "../context/SortProvider";
import { applySort } from "../utils/SortUtils";
import { applyFilters } from "../utils/FilterUtils";

function ProductDisplay({ products }: {products: Product[]}) {
    const { filter } = useFilterContext();
    const { sort } = useSortContext();

    const displayedProducts = applySort(applyFilters(products, filter), sort);
    
    return (
        <>
            {displayedProducts.length === 0 ?
                <div className="flex justify-center pt-10">
                    <div className="flex flex-col items-center w-fit space-y-2">
                    <FaSearch className="size-20 text-yellow-500"></FaSearch>
                    <p className="text-2xl font-semibold">No items found</p>
                    </div>
                </div>
                :
                <ProductList products={displayedProducts}/>
            }
        </>
    );
}
export default ProductDisplay;