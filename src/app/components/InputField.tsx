"use client";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

function InputField({ query, setQuery, placeholder }: {query: string, setQuery: Dispatch<SetStateAction<string>>, placeholder: string}) { 
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);
    
    return mounted ? <input value={query} onChange={(q) => setQuery(q.target.value)} className="rounded-xl bg-gray-100 p-2 w-full" type="text" placeholder={placeholder}/> 
                   : <div className="rounded-2xl bg-gray-100 text-gray-400 p-2">{placeholder}</div>
}
export default InputField;