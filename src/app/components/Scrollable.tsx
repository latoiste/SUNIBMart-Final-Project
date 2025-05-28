"use client";
import { Dispatch, SetStateAction } from "react";

function Scrollable({ filterOptions, setSelected }: {filterOptions: string[], setSelected: Dispatch<SetStateAction<string[]>>}) {
    
    function handleChecked(option: string) {
        setSelected(s => {
            return s.includes(option) ? s.filter(element => element !== option) : [...s, option];
        })
    }

    return (
        <div className="border-y-2 border-gray-100 overflow-y-auto h-48 w-full flex flex-wrap space-x-2">
            {filterOptions.map((option, index) => 
                <div key={index} className="h-8 w-fit flex flex-wrap items-center space-x-1">
                    <input onChange={() => handleChecked(option)} type="checkbox" id={option} className="accent-yellow-500"/>
                    <label htmlFor={option}>{option[0].toUpperCase() + option.slice(1)}</label>
                </div>
            )}
        </div>
    )
}
export default Scrollable;