"use client";
import Link from "next/link";
import Card from "./components/Card";
import { useProductContext } from "./context/ProductContext";
import Navbar from "./components/Navbar";

export default function Home() {
  //make card list component later, biar Home tinggal manggil component itu
  //product == undefined handler juga bakal di card list
  const product = useProductContext();
  
  //buat ngehandle product undefined
  //useProductContext gabisa async so make a handler
  if (!product) {
    return <div>LODING</div>
  }

  return (
    <>
      <Navbar/>
      <Link href="/login">AAAAA</Link>
      <Card product ={product}/>
    </>
  );
}
