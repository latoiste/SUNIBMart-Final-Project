"use client";
import { useEffect, useState } from "react";
import { useProductContext } from "../../context/ProductProvider";
import Scrollable from "../Scrollable";
import { useFilterContext } from "@/app/context/FilterProvider";

function CategoryFilter() {
    const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
    const products = useProductContext();
    const { setFilter } = useFilterContext();
    const categories: string[] = [];

    useEffect(() => {
        setFilter(f => ({...f, category: [...selectedCategory]}));
    }, [selectedCategory]);
    
    products?.forEach(product => {
        const category = product.category;
        if (!categories.includes(category)) {
            categories.push(category);
        }
    });

    return (
        <>
            <p className="text-2xl font-semibold">Category</p>
            <Scrollable filterOptions={categories} setSelected={setSelectedCategory}></Scrollable>
        </>
    )
}
export default CategoryFilter;