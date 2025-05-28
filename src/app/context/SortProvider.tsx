"use client";
import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";
import { Sort } from "../types";

interface SortContextType {
    sort: Sort;
    setSort: Dispatch<SetStateAction<Sort>>
}

const SortContext = createContext<SortContextType | null>(null);

export function useSortContext() {
    const sort = useContext(SortContext);
    if (!sort) {
        throw new Error("AAAAAAAAAAAAAAa");
    }
    return sort;
}

function SortProvider({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    const [sort, setSort] = useState<Sort>({});

    return (
        <SortContext.Provider value={{ sort, setSort}}>
            {children}
        </SortContext.Provider>
    )
}
export default SortProvider;