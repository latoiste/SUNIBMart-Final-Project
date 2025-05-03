"use client";
import { useState } from "react";

function SearchBar() { 
    const [query, setQuery] = useState("");
    
    return <input value={query} onChange={(q) => setQuery(q.target.value)} className="rounded-2xl bg-gray-100 p-2" type="text" placeholder="Looking for something?"/>
}
export default SearchBar