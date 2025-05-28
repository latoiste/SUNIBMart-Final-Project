"use client";
import { useSortContext } from "@/app/context/SortProvider";
import { SortOrder } from "@/app/types";
import { useState } from "react";

function StockSort() {
    const { setSort } = useSortContext();
    const [order, setOrder] = useState<SortOrder>();

    return (
        <div className="space-y-2">
            <p className="text-2xl font-semibold">Stock</p>
            <div className="flex space-x-2 items-center">
                <input onChange={() => setOrder("ascending")} type="radio" name="stockOrder" id="stockAsc"/>
                <label htmlFor="stockAsc">Lowest to highest</label>
            </div>
            <div className="flex space-x-2 items-center">
                <input onChange={() => setOrder("descending")} type="radio" name="stockOrder" id="stockDsc"/>
                <label htmlFor="stockDsc">Highest to lowest</label>
            </div>
            <div className="space-x-4">
                <button onClick={() => setSort(s => ({...s, stock: order}))} className="btn-outline p-2 mt-2">Apply</button>
            </div>
        </div>
    )
}
export default StockSort;