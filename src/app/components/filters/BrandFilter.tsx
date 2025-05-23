"use client";
import { useEffect, useState } from "react";
import { useProductContext } from "../../context/ProductProvider";
import Scrollable from "../Scrollable";
import { useFilterContext } from "@/app/context/FilterProvider";

function BrandFilter() {
    const [selectedBrand, setSelectedBrand] = useState<string[]>([]);
    const products = useProductContext();
    const { setFilter } = useFilterContext();
    const brands: string[] = [];

    useEffect(() => {
        setFilter(f => ({...f, brand: [...selectedBrand]}));
    }, [selectedBrand]);
    
    products?.forEach(product => {
        const brand = product.brand;
        if (brand && !brands.includes(brand)) {
            brands.push(brand);
        }
    });

    return (
        <>
            <p className="text-2xl font-semibold">Brand</p>
            <Scrollable filterOptions={brands} setSelected={setSelectedBrand}></Scrollable>
        </>
    )
}
export default BrandFilter;