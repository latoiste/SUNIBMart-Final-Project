"use client";
import { redirect, useSearchParams } from "next/navigation";
import { useProductContext } from "../context/ProductProvider";
import Navbar from "../components/Navbar";
import { Product } from "../types";
import FilterProvider from "../context/FilterProvider";
import ProductDisplay from "../components/ProductDisplay";
import SortProvider from "../context/SortProvider";

function Search() {
    return (
        <FilterProvider>
            <SortProvider>
                <Content/>
            </SortProvider>
        </FilterProvider>
    )
}
export default Search;

function Content() {
    const searchParams = useSearchParams();
    const products = useProductContext();
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

    return (
        <>
            <Navbar/>
            <ProductDisplay products={searchResults}/>
        </>
    )
}