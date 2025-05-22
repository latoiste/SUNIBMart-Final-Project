"use client";

import { Dispatch, SetStateAction } from "react";
import { Filter } from "../types";

function FilterPanel({ setFilter }: {setFilter: Dispatch<SetStateAction<Filter>>}) {

    return (
        <div className="w-full">
            <p className="text-3xl font-bold text-yellow-500">Filter</p>
            <input onChange={() => setFilter(f => ({...f, availability: !(f.availability ?? false)}))} type="checkbox" id="availability"/>
            <label htmlFor="availability">Available products only</label>
        </div>
    )
}
export default FilterPanel;