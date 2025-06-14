"use client";
import { useState } from "react";

function ImageList({ images }: {images: string[]}) {
    const [selected, setselected] = useState(0)

    return (
        <div className="flex-none w-100">
            <img src={images[selected]} alt={`Images ${selected}`} className="w-100 h-100 rounded-xl border-2 border-gray-100 dark:border-neutral-800"/>
            <div className="mt-2 flex flex-wrap gap-2">
                {images.map((image, index) => 
                    <img onMouseEnter={() => setselected(index)} key={index} src={image} alt={`Image ${selected}`} 
                         className={`w-20 h-20 rounded-xl border-2 transition duration-300 opacity-100
                                    ${index === selected ? "border-black dark:border-white" : "border-gray-100 dark:border-neutral-800"}`}/>
                )}
            </div>
        </div>
    )
}
export default ImageList;