"use client";
import Navbar from "./components/Navbar";
import { useProductContext } from "./context/ProductProvider";
import FilterProvider from "./context/FilterProvider";
import SortProvider from "./context/SortProvider";
import ProductDisplay from "./components/ProductDisplay";

function Home() {
  //biar dalem Content, useFilterContext ga null
  return (
    <FilterProvider>
      <SortProvider>
        <Content/>
      </SortProvider>
    </FilterProvider>
  );
}
export default Home;

function Content() {
  const products = useProductContext();
  
  if (!products) return null;

  return (
    <>
      <Navbar/>
      <ProductDisplay products={products}/>
    </>
  );
}
