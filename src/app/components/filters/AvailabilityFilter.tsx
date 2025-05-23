"use client";
import { useFilterContext } from "@/app/context/FilterProvider";

function AvailabilityFilter() {
    const { setFilter } = useFilterContext();
    return (
        <>
            <p className="text-2xl font-semibold">Availability</p>
            <div className="flex items-center space-x-2">
                <input className="size-5 accent-yellow-500" onChange={() => setFilter(f => ({...f, availability: !(f.availability ?? false)}))} type="checkbox" id="availability"/>
                <label htmlFor="availability">Available products only</label>
            </div>
        </>
    )
}
export default AvailabilityFilter;