"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { CartItem, User } from "../types";

interface UserContextType {
    loggedIn: boolean;
    user: User | null;
    addToCart: (item: CartItem) => void;
    updateCart: (item: CartItem, newQuantity: number) => void;
    removeItem: (item: CartItem) => void;
    login: (loggedInUser: User) => void;
    logout: () => void;
}

const UserContext = createContext<UserContextType | null>(null);

export function useUserContext() {
    const user = useContext(UserContext);
    if (!user) {
        throw new Error("mmmmmmmmmmmmmm");
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
        const usernames = users.map(user => user.username);

        if (currentUser.loggedIn) {
            //kalo user tbtb ga ada di local storage
            if (!usernames.includes(currentUser.user.username)) {
                logout();
            }
            else login(currentUser.user);
        }
    }, []);
    //TODO: seperate this so its not in UserContext
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
        
        //updates userContext
        setUser(currentUser.user);
        localStorage.setItem("CurrentUser", JSON.stringify(currentUser));
        localStorage.setItem("Users", JSON.stringify(users));
    }

    function updateCart(item: CartItem, newQuantity: number) {
        const currentUser: {loggedIn: boolean, user: User} = JSON.parse(localStorage.getItem("CurrentUser") || "{}");
        const users: User[] = JSON.parse(localStorage.getItem("Users") || "[]");
        const shoppingCart = currentUser.user.shoppingCart;
        const newPrice = Number((newQuantity * item.product.price * ((100-item.product.discountPercentage)/100)).toFixed(2));

        const userId: number = users.findIndex(user => {
            return user.username === currentUser.user.username;
        });
        const itemId: number = shoppingCart.findIndex(cartItem => {
            return cartItem.product.id === item.product.id;
        });

        const user = users[userId];
        const cartItem = shoppingCart[itemId];
        
        cartItem.quantity = newQuantity;
        user.shoppingCart[itemId].quantity = newQuantity;
        
        cartItem.price = newPrice;
        user.shoppingCart[itemId].price = newPrice;
        
        setUser(user);
        localStorage.setItem("CurrentUser", JSON.stringify(currentUser));
        localStorage.setItem("Users", JSON.stringify(users));
    }

    function removeItem(item: CartItem) {
        const currentUser: {loggedIn: boolean, user: User} = JSON.parse(localStorage.getItem("CurrentUser") || "{}");
        const users: User[] = JSON.parse(localStorage.getItem("Users") || "[]");
        const shoppingCart = currentUser.user.shoppingCart;

        const userId: number = users.findIndex(user => {
            return user.username === currentUser.user.username;
        });
        const itemId: number = shoppingCart.findIndex(cartItem => {
            return cartItem.product.id === item.product.id;
        });

        const user = users[userId];

        shoppingCart.splice(itemId , 1);
        user.shoppingCart.splice(itemId, 1);

        setUser(user);
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
        <UserContext.Provider value = {{loggedIn, user, addToCart, updateCart, removeItem, login, logout}}>
            {children}
        </UserContext.Provider>
    )
}
export default UserProvider;