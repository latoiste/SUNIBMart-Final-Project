"use client";
import { useState } from "react";
import InputField from "../components/InputField";
import Link from "next/link";
import { User } from "../types";
import { useUserContext } from "../context/UserProvider";

function Register() {
    const [username, setUsername] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    function registerUser() {
        const users: User[] = JSON.parse(localStorage.getItem("Users") || "[]");
        const user = useUserContext();

        if (validateInput(users)) {
            users.push({
                username: username,
                password: password,
                shoppingCart: [],
            });
            user?.login({
                username: username,
                password: password,
                shoppingCart: [],
            })
            localStorage.setItem("Users", JSON.stringify(users));
        }
    }
    
    function validateInput(users: User[]) {
        const usernames = users.map(user => user.username.toLowerCase());
        var validName = false;
        var validPassword = false;

        if (username.length < 8) setUsernameError(() => "Username must be at least 8 characters!");
        else if (username.length > 18) setUsernameError(() => "Username too long!"); 
        else if (usernames.includes(username.toLowerCase())) setUsernameError(() => "Username taken!");
        else {
            validName = true;
            setUsernameError(() => "");
        }

        if (password.length < 8) setPasswordError("Password must be at least 8 characters!")
        else if (password.length > 18) setPasswordError("Password too long!"); 
        else {
            validPassword = true;
            setPasswordError("");
        }

        return (validName && validPassword)
    }

    return (
            <div className="h-screen flex justify-center items-center">
                <p className="mx-4 font-bold text-yellow-500 text-5xl absolute top-5">SUNIBMart</p>
                <div className="w-2/7 h-auto p-4 space-y-6 rounded-2xl border-2 border-gray-100">
                    <div className="flex items-baseline">
                        <p className="grow text-4xl font-bold text-yellow-500">Register</p>
                        <p className="text-xs text-black me-1">Already have an account?</p>
                        <Link href="/login" className="text-xs underline hover:text-yellow-500">Login</Link>
                    </div>
                    <div>
                        <InputField query={username} setQuery={setUsername} placeholder="Username"/>
                        <span className="ms-2 text-xs text-red-400">{usernameError}</span>
                    </div>
                    <div>
                        <InputField query={password} setQuery={setPassword} placeholder="Password"/>
                        <span className="ms-2 text-xs text-red-400">{passwordError}</span>
                    </div>
                    <button onClick={() => registerUser()} className="btn-filled ">Register</button>
                </div>
            </div>
    )
}
export default Register;