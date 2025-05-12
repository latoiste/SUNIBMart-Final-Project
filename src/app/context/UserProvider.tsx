"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { CartItem, User } from "../types";

interface UserContextType {
    loggedIn: boolean;
    user: User | null;
    addToCart: (item: CartItem) => void;
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
    //for session persistance
    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState<User | null>(null);
    
    //for login persistance kalo refresh
    useEffect(() => {
        const currentUser: {loggedIn: boolean, user: User} = JSON.parse(localStorage.getItem("CurrentUser") || "{}");
        const users: User[] = JSON.parse(localStorage.getItem("Users") || "[]");
        const usernames: string[] = users.map(user => user.username);

        if (currentUser.loggedIn) {
            //kalo user tbtb ga ada di local storage
            if (!usernames.includes(currentUser.user.username)) {
                logout();
            }
            else login(currentUser.user);
        }
    }, []);

    //no nded useeffect just use method
    function addToCart(item: CartItem) {
        const currentUser: {loggedIn: boolean, user: User} = JSON.parse(localStorage.getItem("CurrentUser") || "{}");
        const users: User[] = JSON.parse(localStorage.getItem("Users") || "[]");
        const userId: number = users.findIndex(user => {
            return user.username === currentUser.user.username;
        });
        const user = users[userId];

        currentUser.user.shoppingCart.push(item);
        user.shoppingCart.push(item);
        
        localStorage.setItem("CurrentUser", JSON.stringify(currentUser));
        localStorage.setItem("Users", JSON.stringify(users));
    }

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
        <UserContext.Provider value = {{loggedIn, user, addToCart, login, logout}}>
            {children}
        </UserContext.Provider>
    )
}
export default UserProvider;