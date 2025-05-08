"use client";

import { useState } from "react";

function ImageList({ images }: {images: string[]}) {
    const [selected, setselected] = useState(0)

    return (
        <div className="w-102 h-102">
            <img src={images[selected]} alt={`Images ${selected}`} className="rounded-xl border-2 border-gray-100"/>
            <div className="pt-2 flex flex-wrap gap-2">
                {images.map((image, index) => 
                    <img onMouseEnter={() => setselected(index)} key={index} src={image} alt={`Images ${selected}`} 
                         className={`h-24 w-24 rounded-xl border-2 transition duration-300 opacity-100
                                    ${index == selected ? "border-black" : "border-gray-100"}`}/>
                )}
            </div>
        </div>
    )
}
export default ImageList;