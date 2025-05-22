"use client";
import { useState } from "react";
import FilterPanel from "./components/FilterPanel";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import { useProductContext } from "./context/ProductProvider";
import { Filter } from "./types";
import { applyFilters } from "./utils/productFilters";

export default function Home() {
  const [filter, setFilter] = useState<Filter>({});
  const products = useProductContext();
  
  if (!products) return null;

  const filteredProducts = applyFilters(products, filter);

  return (
    <>
      <Navbar/>
      <div className="flex pt-26">
        <div className="w-1/5">
          <FilterPanel setFilter={setFilter}/>
        </div>
        <div className="w-4/5">
          <ProductList products={filteredProducts}/>
        </div>
      </div>
    </>
  );
}
