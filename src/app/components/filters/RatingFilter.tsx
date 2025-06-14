"use client";
import { useFilterContext } from "@/app/context/FilterProvider";

function RatingFilter() {
    const { filter, setFilter } = useFilterContext();

    return (
        <>
            <div>
                <p className="text-2xl font-semibold">Rating</p>
                <p>{filter.rating === 5 ? "5 only" : `${filter.rating} and up`}</p>
            </div>
            <input className="accent-yellow-500 w-3/5" type="range" value={filter.rating} min={1} max={5} 
                onChange={(e) => {
                    setFilter(f => ({...f, rating: Number(e.target.value)
                }))}}/>
        </>
    )
}
export default RatingFilter;                
                
                
                