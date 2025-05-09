"use client";
import Link from "next/link";
import SearchBar from "./SearchBar";
import ShoppingCart from "./ShoppingCart";

function Navbar() {
    return (
        <div className="bg-white border-b-2 border-gray-100 h-24 w-full flex items-center p-6 fixed top-0">
            <h1 className="font-bold text-yellow-500 text-5xl">SUNIBMart</h1>
            
            <div className="m-4 grow">
                <SearchBar/>
            </div>

            <div className="m-4">
                <ShoppingCart/>
            </div>

            <Link href="/login" className="rounded-2xl border-2 border-amber-300 p-2 m-4 transition duration-200 hover:bg-amber-300">Register</Link>
            <Link href="/login" className="rounded-2xl border-2 border-amber-300 p-2 me-6 transition duration-200 hover:bg-amber-300 ">Login</Link>
        </div>
    )
}

export default Navbar