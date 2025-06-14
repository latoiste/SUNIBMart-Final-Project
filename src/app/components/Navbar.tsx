"use client";
import Link from "next/link";
import InputField from "./InputField";
import ShoppingCart from "./ShoppingCart";
import { useState } from "react";
import { useUserContext } from "../context/UserProvider";
import { useRouter } from "next/navigation";
import ThemeToggler from "./ThemeToggler";

function Navbar() {
    const [query, setQuery] = useState("");
    const router = useRouter();
    const user = useUserContext();

    function handleSubmit(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key === "Enter") {
            router.push(`/search?query=${query}`);
        }
    }

    return (
        <>
            <div className="bg-white dark:bg-black border-b-2 border-gray-100 dark:border-neutral-800 h-24 w-full flex items-center px-8 space-x-6 fixed top-0 z-20">
                <Link href="/" className="font-bold text-yellow-500 text-5xl">SUNIBMart</Link>
                
                <div className="grow">
                    <InputField query={query} setQuery={setQuery} placeholder="Looking for something?" handleSubmit={handleSubmit}/>
                </div>
                <ShoppingCart/>
                <ThemeToggler/>
                {user.loggedIn ? 
                    <p onClick={() => user.logout()} className="hover:cursor-pointer">Logged in as {user.user?.username}</p>
                    : 
                    <>
                        <Link href="/register" className="p-2 btn-outline">Register</Link>
                        <Link href="/login" className="p-2 btn-outline">Login</Link>
                    </>
                }
            </div>
        </>
    )
}

export default Navbar