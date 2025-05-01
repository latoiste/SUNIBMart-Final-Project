"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Product from "../types";

function Login() {
    const [product, setProduct] = useState<Product | null>(null)
    
    useEffect(() => {
        axios.get("https://dummyjson.com/products/1")
            .then((Response) => setProduct(Response.data))
            .catch((error) => console.error(error))
        console.log("Fetched Data!")
    }, [])
    console.log("Product issss", product)

    // if (product === null) {
    return <div>AAAAAAAAAAAAAA</div>
    // }
    // else {
    //     return (
    //         // <h1>{product.thumbnail}</h1>
    //         <img src={product.thumbnail} alt="Product Thumbnail" />
    //     )
    // }
}

export default Login