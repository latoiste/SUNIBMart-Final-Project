"use client";
import Link from "next/link";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";

export default function Home() {
  return (
    <>
      <Navbar/>
      <div className="grid grid-cols-8 pt-24">
        <div className="col-span-2">Aa</div>
        <div className="col-span-6">
          <ProductList/>
        </div>
      </div>
    </>
  );
}
