"use client";
import { useState } from "react";
import InputField from "../components/InputField";
import Link from "next/link";

function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
            <div className="h-screen flex justify-center items-center">
                <p className="mx-4 font-bold text-yellow-500 text-5xl absolute top-5">SUNIBMart</p>
                <div className="w-2/7 h-auto p-4 space-y-6 rounded-2xl border-2 border-gray-100">
                    <div className="flex items-baseline">
                        <p className="grow text-4xl font-bold text-yellow-500">Register</p>
                        <p className="text-xs text-black me-1">Already have an account?</p>
                        <Link href="/login" className="text-xs underline hover:text-yellow-500">Login</Link>
                    </div>
                    <InputField query={username} setQuery={setUsername} placeholder="Username"/>
                    <InputField query={email} setQuery={setEmail} placeholder="Email"/>
                    <InputField query={password} setQuery={setPassword} placeholder="Password"/>
                    <button className="btn-filled ">Register</button>
                </div>
            </div>
    )
}
export default Register;