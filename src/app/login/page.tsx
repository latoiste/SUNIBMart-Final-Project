"use client";
import { useState } from "react";
import InputField from "../components/InputField";

function Login() {
    const [username, setUsername] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");


    return (
            <div className="h-screen flex justify-center items-center">
                <p className="mx-4 font-bold text-yellow-500 text-5xl absolute top-5">SUNIBMart</p>
                <div className="w-2/7 h-auto p-4 space-y-6 rounded-2xl border-2 border-gray-100">
                    <p className="grow text-4xl font-bold text-yellow-500">Login</p>
                    <InputField query={username} setQuery={setUsername} placeholder="Username"/>
                    <InputField query={password} setQuery={setPassword} placeholder="Password"/>
                    <button className="btn-filled ">Login</button>
                </div>
            </div>
    )
}
export default Login