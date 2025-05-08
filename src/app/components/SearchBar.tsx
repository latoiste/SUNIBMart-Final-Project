"use client";
import { useEffect, useState } from "react";

function SearchBar() { 
    const [query, setQuery] = useState("");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);
    
    return mounted ? <input value={query} onChange={(q) => setQuery(q.target.value)} className="rounded-xl bg-gray-100 p-2 w-full" type="text" placeholder="Looking for something?"/> 
                   : <div className="rounded-2xl bg-gray-100 text-gray-400 p-2">Looking for something?</div>
}
export default SearchBar;