import { FaSearch } from "react-icons/fa";
import ProductList from "./ProductList";
import FilterPanel from "./FilterPanel";
import SortPanel from "./SortPanel";
import { Product } from "../types";
import { useFilterContext } from "../context/FilterProvider";
import { useSortContext } from "../context/SortProvider";
import { applySort } from "../utils/ProductSort";
import { applyFilters } from "../utils/ProductFilters";

function ProductDisplay({ products }: {products: Product[]}) {
    const { filter } = useFilterContext();
    const { sort } = useSortContext();

    const displayedProducts = applySort(applyFilters(products, filter), sort);
    
    return (
        <div className="flex pt-26 space-x-4">
            <div className="w-1/5">
                <div className="ps-2 space-y-2">
                    <FilterPanel />
                    <SortPanel />
                </div>
            </div>
            <div className="w-4/5">
            {displayedProducts.length === 0 ?
                <div className="flex justify-center pt-2">
                    <div className="flex flex-col items-center w-fit space-y-2">
                    <FaSearch className="size-20 text-yellow-500"></FaSearch>
                    <p className="text-2xl font-semibold">No items found</p>
                    </div>
                </div>
                :
                <ProductList products={displayedProducts}/>
            }
            </div>
        </div>
    );
}
export default ProductDisplay;
