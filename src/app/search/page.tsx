"use client";
import { redirect, useSearchParams } from "next/navigation";
import { useProductContext } from "../context/ProductProvider";
import Navbar from "../components/Navbar";
import { Product } from "../types";
import ProductList from "../components/ProductList";
import FilterPanel from "../components/FilterPanel";
import { FaSearch } from "react-icons/fa";
import { applyFilters } from "../utils/ProductFilters";
import FilterProvider, { useFilterContext } from "../context/FilterProvider";

function Search() {
    return (
        <FilterProvider>
            <Content/>
        </FilterProvider>
    )
}
export default Search;

function Content() {
    const searchParams = useSearchParams();
    const products = useProductContext();
    const { filter } = useFilterContext();
    const query = searchParams.get("query")?.split(" ");
    const searchResults: Product[] = [];

    if (!query || query[0] === "") redirect("/");

    products?.forEach(product => {
        const matchArray = [product.title.toLowerCase(),
            product.brand?.toLowerCase(),
            product.category.toLowerCase(),
            ...product.tags.map(tag => tag.toLowerCase())
        ];

        const match = query.some(q => matchArray.some(element => element?.includes(q.toLowerCase())));

        if (match) searchResults.push(product);
    });

    const filteredProducts = applyFilters(searchResults, filter);

    return (
        <>
            <Navbar/>
            <div className="flex pt-26">
                <div className="w-1/5">
                    <div className="px-4">
                        <FilterPanel/>
                    </div>
                </div>
                <div className="w-4/5">
                {filteredProducts.length === 0 ? 
                    <div className="flex justify-center pt-2">
                        <div className="flex flex-col items-center w-fit space-y-2">
                            <FaSearch className="size-20 text-yellow-500"></FaSearch>
                            <p className="text-2xl font-semibold">No items found</p> 
                        </div>
                    </div>
                    :    
                    <ProductList products={filteredProducts}/>
                }
                </div>
            </div>
        </>
    )
}