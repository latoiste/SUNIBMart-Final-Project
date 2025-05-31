"use client";
import FilterPanel from "../components/FilterPanel";
import Navbar from "../components/Navbar"
import PriceSort from "../components/sort/PriceSort";
import SortPanel from "../components/SortPanel";
import FilterProvider, { useFilterContext } from "../context/FilterProvider"
import SortProvider from "../context/SortProvider";

function Test() {
    // const {filter} = useFilterContext();
    return (
        <>  
        <div className="w-1/5">
            <SortProvider>
                <FilterProvider>
                    <Navbar/>
                    <div className="pt-26">
                        <PriceSort/>
                        {/* <button>aaaaa</button> */}
                    </div>
                </FilterProvider>
            </SortProvider>
        </div>
        </>
    )
}

export default Test
