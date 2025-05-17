"use client";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import { useProductContext } from "./context/ProductProvider";

export default function Home() {
  const products = useProductContext();

  return (
    <>
      <Navbar/>
      <div className="grid grid-cols-8 pt-26">
        <div className="col-span-2">Aa</div>
        <div className="col-span-6">
          {products && 
            <ProductList products={products}/>
          }
        </div>
      </div>
    </>
  );
}
