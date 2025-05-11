"use client";
import Link from "next/link";
import InputField from "./InputField";
import ShoppingCart from "./ShoppingCart";
import { useState } from "react";
import { useUserContext } from "../context/UserProvider";

function Navbar() {
    const [query, setQuery] = useState("");
    const user = useUserContext();
    
    return (
        <div className="bg-white border-b-2 border-gray-100 h-24 w-full flex items-center px-8 space-x-6 fixed top-0">
            <Link href="/" className="font-bold text-yellow-500 text-5xl">SUNIBMart</Link>
            
            <div className="grow">
                <InputField query={query} setQuery={setQuery} placeholder="Looking for something?"/>
            </div>
            <div>
                <ShoppingCart/>
            </div>
            {user?.loggedIn ? 
                <p onClick={() => user.logout()} className="hover:cursor-pointer">Logged in as {user.user?.username}</p>
                : 
                <>
                    <Link href="/register" className="p-2 btn-outline">Register</Link>
                    <Link href="/login" className="p-2 btn-outline">Login</Link>
                </>
            }
        </div>
    )
}

export default Navbar