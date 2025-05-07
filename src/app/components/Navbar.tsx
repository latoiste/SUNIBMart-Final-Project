"use client";
import Link from "next/link";
import SearchBar from "./SearchBar";

function Navbar() {
    return (
        <div className="bg-white h-24 flex items-center p-2 position: fixed top-0 w-full">
            <h1 className="font-bold text-yellow-500 text-5xl">BINUSMart</h1>
            <SearchBar/>
            <Link href="/login" className="rounded-2xl border-2 border-amber-300 p-2 m-2">Register</Link>
            <Link href="/login" className="rounded-2xl border-2 border-amber-300 p-2 m-4">Login</Link>
            <hr className="border-t-2 border-gray-300 my-4"/>
        </div>
    )
}

export default Navbar