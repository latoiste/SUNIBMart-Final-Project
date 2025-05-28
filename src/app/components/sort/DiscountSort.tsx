"use client";
import { useSortContext } from "@/app/context/SortProvider";
import { SortOrder } from "@/app/types";
import { useState } from "react";

function DiscountSort() {
    const { setSort } = useSortContext();
    const [order, setOrder] = useState<SortOrder>();

    return (
        <div className="space-y-2">
            <p className="text-2xl font-semibold">Discount</p>
            <div className="flex space-x-2 items-center">
                <input onChange={() => setOrder("ascending")} type="radio" name="discountOrder" id="discountAsc"/>
                <label htmlFor="discountAsc">Lowest to highest</label>
            </div>
            <div className="flex space-x-2 items-center">
                <input onChange={() => setOrder("descending")} type="radio" name="discountOrder" id="discountDsc"/>
                <label htmlFor="discountDsc">Highest to lowest</label>
            </div>
            <button onClick={() => setSort(s => ({...s, discount: order}))} className="btn-outline p-2 mt-2">Apply</button>
        </div>
    )
}
export default DiscountSort;