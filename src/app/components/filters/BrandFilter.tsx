"use client";
import { useEffect, useState } from "react";
import { useProductContext } from "../../context/ProductProvider";
import Scrollable from "../Scrollable";
import { useFilterContext } from "@/app/context/FilterProvider";

function BrandFilter() {
    const [selectedBrand, setSelectedBrand] = useState<string[]>([]);
    const products = useProductContext();
    const { filter, setFilter } = useFilterContext();
    const brands: string[] = [];

    useEffect(() => {
        setFilter(f => ({...f, brand: [...selectedBrand]}));
    }, [selectedBrand]);

    useEffect(() => {
        //kalo filter di reset, selectedBrand.length > 0 biar ga infinite loop
        if (filter.brand.length === 0 && selectedBrand.length > 0) {
            setSelectedBrand([])
        }
    }, [filter.brand]);

    products?.forEach(product => {
        const brand = product.brand;
        if (brand && !brands.includes(brand)) {
            brands.push(brand);
            brands.sort();
        }
    });

    return (
        <>
            <p className="text-2xl font-semibold">Brand</p>
            <Scrollable filterOptions={brands} selected={filter.brand} setSelected={setSelectedBrand}></Scrollable>
        </>
    )
}
export default BrandFilter;