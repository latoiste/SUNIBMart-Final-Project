"use client";
import { Dispatch, SetStateAction } from "react";

function InputField({ query, setQuery, placeholder, handleSubmit }: {query: string, setQuery: Dispatch<SetStateAction<string>>, placeholder: string, handleSubmit?(event: React.KeyboardEvent<HTMLInputElement>): void }) { 
        
    return <input onKeyDown={handleSubmit} value={query} onChange={(e) => setQuery(e.target.value)} 
                className="rounded-xl bg-gray-100 dark:bg-neutral-900 p-2 w-full" type="text" placeholder={placeholder}/> 
    // return isClient ? 
    //                : <div className="rounded-2xl w-full bg-gray-100 text-gray-400 p-2">{placeholder}</div>
}
export default InputField;