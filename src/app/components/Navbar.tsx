"use client";
import Link from "next/link";
import InputField from "./InputField";
import ShoppingCart from "./ShoppingCart";
import { useState } from "react";

function Navbar() {
    const [query, setQuery] = useState("");
    console.log(query);
    return (
        <div className="bg-white border-b-2 border-gray-100 h-24 w-full flex items-center p-4 fixed top-0">
            <Link href="/" className="mx-4 font-bold text-yellow-500 text-5xl">SUNIBMart</Link>
            
            <div className="mx-4 grow">
                <InputField query={query} setQuery={setQuery} placeholder="Looking for something?"/>
            </div>
            
            <div className="mx-4">
                <ShoppingCart/>
            </div>

            <Link href="/register" className="p-2 m-4 btn-outline">Register</Link>
            <Link href="/login" className="p-2 me-6 btn-outline">Login</Link>
        </div>
    )
}

export default Navbar