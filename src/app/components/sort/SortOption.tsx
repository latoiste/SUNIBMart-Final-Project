"use client";
import { useSortContext } from "@/app/context/SortProvider";
import { Sort, SortOrder } from "@/app/types";
import { useState } from "react";

function SortOption({ option }: {option: keyof Sort}) {
    const { sort, setSort } = useSortContext();
    const [order, setOrder] = useState<SortOrder | undefined>(sort[option]);

    return (
        <>
            <div className="flex space-x-2 items-center">
                <input onChange={() => setOrder("ascending")} type="radio" name={`${option}Order`} id={`${option}Asc`}/>
                <label htmlFor={`${option}Asc`}>Lowest to highest</label>
            </div>
            <div className="flex space-x-2 items-center">
                <input onChange={() => setOrder("descending")} type="radio" name={`${option}Order`} id={`${option}Dsc`}/>
                <label htmlFor={`${option}Dsc`}>Highest to lowest</label>
            </div>
            <div className="space-x-4">
            <button onClick={() => {
                if (order) setSort(s => ({...s, [option]: order}));
                }} 
                className="btn-outline p-2 mt-2">Apply</button>
            </div>
        </>
    );
}
export default SortOption;