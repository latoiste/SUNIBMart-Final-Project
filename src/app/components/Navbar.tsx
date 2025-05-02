"use client"
import Link from "next/link"
import { useState } from "react"


function Navbar() {
    const [query, setQuery] = useState("AAAAAAAAAA")
    
    return (
        <div className="bg-lime-50 h-25 flex items-center p-2">
            {/* TODO: Bikin gambar tulisannya BINUS, warna hitam default */}
            <h1 className="font-bold text-yellow-500 text-5xl">BINUSMart</h1>
            {/* TODO: Bikin tulisan Mart, warna kuning binus */}
            <h1 className="font-bold text-yellow-500 text-5xl flex-1">AAAAA</h1>
            <Link href="/login" className="rounded-2xl border-2 border-amber-300 p-2 m-2">Register</Link>
            <Link href="/login" className="rounded-2xl border-2 border-amber-300 p-2 m-4">Login</Link>
            {/* <input onChange={(e) => e.target.value} className="" type="text" placeholder="FUCK!!"/> */}
        </div>
    )
}

export default Navbar