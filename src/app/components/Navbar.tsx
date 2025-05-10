"use client";
import Link from "next/link";
import SearchBar from "./SearchBar";
import ShoppingCart from "./ShoppingCart";

function Navbar() {
    return (
        <div className="bg-white border-b-2 border-gray-100 h-24 w-full flex items-center p-6 fixed top-0">
            <Link href="/" className="font-bold text-yellow-500 text-5xl">SUNIBMart</Link>
            
            <div className="m-4 grow">
                <SearchBar/>
            </div>

            <div className="m-4">
                <ShoppingCart/>
            </div>

            <Link href="/login" className="p-2 m-4 registerButton">Register</Link>
            <Link href="/login" className="p-2 me-6 registerButton">Login</Link>
        </div>
    )
}

export default Navbar