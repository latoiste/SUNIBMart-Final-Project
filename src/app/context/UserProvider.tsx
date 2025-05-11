"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { User } from "../types";

interface UserContextType {
    loggedIn: boolean;
    user: User | null;
    login: (loggedInUser: User) => void;
    logout: () => void;
}

const UserContext = createContext<UserContextType | null>(null);

export function useUserContext() {
    const user = useContext(UserContext);
    if (!user) {
        return null;
    }
    return user;
}

function UserProvider({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState<User | null>(null);
    
    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem("CurrentUser") || "{}");
        const users: User[] = JSON.parse(localStorage.getItem("Users") || "[]");
        const usernames = users.map(user => user.username);

        //kalo users ga ada di local storage
        if (currentUser.loggedIn) {
            if (!usernames.includes(currentUser.user.username)) {
                logout();
            }
            else login(currentUser.user);
        }


    }, []);

    function login(loggedInUser: User) {
        setUser(loggedInUser);
        setLoggedIn(true);
        localStorage.setItem("CurrentUser", JSON.stringify({
            loggedIn: true,
            user: loggedInUser,
        }));
    }

    function logout() {
        setUser(null);
        setLoggedIn(false);
        localStorage.setItem("CurrentUser", JSON.stringify({
            loggedIn: false,
            user: null,
        }));
    }

    return (
        <UserContext.Provider value = {{loggedIn, user, login, logout}}>
            {children}
        </UserContext.Provider>
    )
}
export default UserProvider;