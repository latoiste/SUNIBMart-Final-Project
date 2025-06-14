"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { IoIosMoon } from "react-icons/io";
import { IoMdSunny } from "react-icons/io";

function ThemeToggler() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    function changeTheme() {
        setTheme(theme === "dark" ? "light" : "dark");
    }

    //hydration error saat ngambil theme dari local storage
    if (!mounted) return null;

    return (
        <div onClick={changeTheme} className="flex items-center justify-center text-4xl text-yellow-500 p-1 w-auto rounded-xl transition duration-100 hover:bg-gray-200 dark:hover:bg-neutral-700">
            {theme === "dark" ? <IoMdSunny/> : <IoIosMoon/>}
        </div>
    );
}
export default ThemeToggler;