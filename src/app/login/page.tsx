"use client";
import { useState } from "react";
import InputField from "../components/InputField";
import { useUserContext } from "../context/UserProvider";
import { User } from "../types";
import { BarLoader } from "react-spinners";
import { useRouter } from "next/navigation";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const user = useUserContext();
    const router = useRouter();
    
    function loginUser() {
        const users: User[] = JSON.parse(localStorage.getItem("Users") || "[]");
        const loggedInUser: User | undefined =  users.find((user) => {
            return username === user.username && password === user.password
        });

        // console.log(loggedInUser);

        if (loggedInUser) {
            setLoading(true);
            user.login(loggedInUser);
            router.push("/");
        }
        else setError("Username or password doesn't match!")
    }
    
    return (
            <div className="h-screen flex justify-center items-center">
                <p className="mx-4 font-bold text-yellow-500 text-5xl absolute top-5">SUNIBMart</p>
                <div className="w-2/7 h-auto p-4 space-y-6 rounded-2xl border-2 border-gray-100 dark:border-neutral-800">
                    <p className="grow text-4xl font-bold text-yellow-500">Login</p>
                    <InputField query={username} setQuery={setUsername} placeholder="Username"/>
                    <InputField query={password} setQuery={setPassword} placeholder="Password"/>
                    <p>{error}</p>
                    <button onClick={() => loginUser()} className="btn-filled ">{loading ? <BarLoader color="white"/> : "Login"}</button>
                </div>
            </div>
    )
}
export default Login