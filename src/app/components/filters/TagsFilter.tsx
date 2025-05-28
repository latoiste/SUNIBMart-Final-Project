"use client";
import { useEffect, useState } from "react";
import { useProductContext } from "../../context/ProductProvider";
import Scrollable from "../Scrollable";
import { useFilterContext } from "@/app/context/FilterProvider";

function TagsFilter() {
    const [selectedTag, setSelectedTag] = useState<string[]>([]);
    const products = useProductContext();
    const { filter, setFilter } = useFilterContext();
    const tags: string[] = [];

    useEffect(() => {
        setFilter(f => ({...f, tags: [...selectedTag]}));
    }, [selectedTag]);

    useEffect(() => {
        if (filter.tags.length === 0 && selectedTag.length > 0) {
            setSelectedTag([])
        }
    }, [filter.tags]);

    products?.forEach(product => {
        const tag = product.tags;
        tag.forEach(element => {
            if (!tags.includes(element)) {
                tags.push(element);
                tags.sort();
            } 
        });
    });

    return (
        <>
            <p className="text-2xl font-semibold">Tags</p>
            <Scrollable filterOptions={tags} selected={selectedTag} setSelected={setSelectedTag}></Scrollable>
        </>
    )
}
export default TagsFilter;