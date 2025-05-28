"use client";
import { useFilterContext } from "@/app/context/FilterProvider";
import InputField from "../InputField";
import { useEffect, useState } from "react";

function PriceFilter() {
    const { filter, setFilter } = useFilterContext();
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");

    useEffect(() => {
        //kalo ke reset
        if (!filter.minPrice && !filter.maxPrice) {
            setMinPrice("");
            setMaxPrice("");
        }
    }, [filter.minPrice, filter.maxPrice]);

    function handleSubmit(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key === "Enter") {
            setFilter(f => ({
                ...f, 
                minPrice: (Number(minPrice) ?? null), 
                maxPrice: (Number(maxPrice) ?? null)
            }));
        }
    }
    
    return (
        <>
            <p className="text-2xl font-semibold">Price</p>
            <div className="flex items-center space-x-2">
                <p className="text-xl font-semibold">$</p>
                <InputField query={minPrice} setQuery={setMinPrice} handleSubmit={handleSubmit} placeholder="Minimum price"></InputField>
            </div>
            <div className="flex items-center space-x-2">
                <p className="text-xl font-semibold">$</p>
                <InputField query={maxPrice} setQuery={setMaxPrice} handleSubmit={handleSubmit} placeholder="Maximum price"></InputField>
            </div>
        </>
    )
}
export default PriceFilter;