"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useProductContext } from "../context/ProductProvider";
import Navbar from "../components/Navbar";
import { Product } from "../types";
import FilterProvider from "../context/FilterProvider";
import ProductDisplay from "../components/ProductDisplay";
import SortProvider from "../context/SortProvider";
import FilterPanel from "../components/FilterPanel";
import SortPanel from "../components/SortPanel";
import LoadingOverlay from "../components/LoadingOverlay";
import { Suspense } from "react";

function SearchPage() {
    return (
        <FilterProvider>
            <SortProvider>
                <Suspense>
                    <Search/>
                </Suspense>
            </SortProvider>
        </FilterProvider>
    )
}
export default SearchPage;

function Search() {
    const products = useProductContext();
    const searchParams = useSearchParams();
    const router = useRouter();
    const query = searchParams.get("query")?.split(" ");
    const searchResults: Product[] = [];    
    
    if (!query || query[0] === "") {
        router.push("/");
        return;
    }

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
            <div className="flex pt-26 space-x-4">
                <div className="w-1/5">
                    <div className="ps-2">
                        <FilterPanel/>
                        <SortPanel/>
                    </div>
                </div>
                <div className="w-4/5">
                    {products ? 
                        <ProductDisplay products={searchResults} />
                        :
                        <div className="w-full h-screen relative">
                            <LoadingOverlay/>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}