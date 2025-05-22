"use client";
import { redirect, useSearchParams } from "next/navigation";
import { useProductContext } from "../context/ProductProvider";
import Navbar from "../components/Navbar";
import { Product } from "../types";
import ProductList from "../components/ProductList";

function Search() {
    const searchParams = useSearchParams();
    const query = searchParams.get("query")?.split(" ");
    const products = useProductContext();
    let searchResults: Product[] = [];
    console.log(query);

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
            <div className="pt-26">
                <ProductList products={searchResults}/>
            </div>
        </>
    )
}
export default Search;