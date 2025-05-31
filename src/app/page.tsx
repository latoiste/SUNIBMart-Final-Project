"use client";
import Navbar from "./components/Navbar";
import { useProductContext } from "./context/ProductProvider";
import FilterProvider from "./context/FilterProvider";
import SortProvider from "./context/SortProvider";
import ProductDisplay from "./components/ProductDisplay";
import FilterPanel from "./components/FilterPanel";
import SortPanel from "./components/SortPanel";
import LoadingOverlay from "./components/LoadingOverlay";

function Home() {
  //biar dalem Content, useFilterContext ga null
  return (
    <FilterProvider>
      <SortProvider>
        <Content />
      </SortProvider>
    </FilterProvider>
  );
}
export default Home;

function Content() {
  const products = useProductContext();

  return (
    <>
      <Navbar />
      <div className="flex pt-26 space-x-4">
        <div className="w-1/5">
          <div className="ps-2">
            <FilterPanel/>
            <SortPanel/>
          </div>
        </div>
        <div className="w-4/5">
          {products ?
            <ProductDisplay products={products} />
            :
            <div className="w-full h-screen fixed">
              <LoadingOverlay/>
            </div>
          }
        </div>
      </div>
    </>
  );
}
