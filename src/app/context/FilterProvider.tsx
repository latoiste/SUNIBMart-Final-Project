"use client";
import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";
import { Filter } from "../types";

interface FilterContextType {
    filter: Filter
    setFilter: Dispatch<SetStateAction<Filter>>
}

const FilterContext = createContext<FilterContextType | null>(null);

export function useFilterContext() {
    const filter = useContext(FilterContext);
    if (!filter) {
        throw new Error("askjdbah");
    }
    return filter;
}

function FilterProvider({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    const [filter, setFilter] = useState<Filter>({
        brand: [],
        category: [],
        tags: [],
        rating: 1,
        availability: false,
    });

    return (
        <FilterContext.Provider value = {{filter, setFilter}}>
            {children}
        </FilterContext.Provider>
    )
}
export default FilterProvider;