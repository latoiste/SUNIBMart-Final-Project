"use client";
import { useFilterContext } from "@/app/context/FilterProvider";
import { useState } from "react";

function RatingFilter() {
    const { setFilter } = useFilterContext();
    const [rating, setRating] = useState("1");

    return (
        <>
            <div>
                <p className="text-2xl font-semibold">Rating</p>
                <p>{rating === "5" ? "5 only" : `${rating} and up`}</p>
            </div>

            <input className="accent-yellow-500 w-3/5" type="range" defaultValue={1} min={1} max={5} 
                onChange={(e) => {
                    setRating(e.target.value);
                    setFilter(f => ({...f, rating: Number(e.target.value)
                }))}}/>
        </>
    )
}
export default RatingFilter;                
                
                
                