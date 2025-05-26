"use client";
import FilterPanel from "./components/FilterPanel";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import { useProductContext } from "./context/ProductProvider";
import { applyFilters } from "./utils/ProductFilters";
import { FaSearch } from "react-icons/fa";
import FilterProvider, { useFilterContext } from "./context/FilterProvider";

function Home() {
  //biar dalem Content, useFilterContext ga null
  return (
    <FilterProvider>
      <Content/>
    </FilterProvider>
  );
}
export default Home;

function Content() {
  const { filter } = useFilterContext();
  const products = useProductContext();
  
  if (!products) return null;

  const filteredProducts = applyFilters(products, filter);

  return (
    <>
      <Navbar/>
      <div className="flex pt-26 space-x-4">
        <div className="w-1/5">
          <div className="ps-2">
            <FilterPanel/>
          </div>
        </div>
        <div className="w-4/5">
        {filteredProducts.length === 0 ? 
          <div className="flex justify-center pt-2">
            <div className="flex flex-col items-center w-fit space-y-2">
              <FaSearch className="size-20 text-yellow-500"></FaSearch>
              <p className="text-2xl font-semibold">No items found</p> 
            </div>
          </div>
          : 
          <ProductList products={filteredProducts}/>
        }
        </div>
      </div>
    </>
  );
}
