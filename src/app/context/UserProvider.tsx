import { createContext, useContext, useState } from "react";
import { User } from "../types";

interface UserContextType {
    loggedIn: boolean;
    user: User | null;
    login: (loggedInUser: User) => void;
    logout: () => void;
}

const UserContext = createContext<UserContextType | null>(null)

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

    function login(loggedInUser: User) {
        setUser(loggedInUser);
        setLoggedIn(true);
    }

    function logout() {
        setUser(null);
        setLoggedIn(false);
    }

    return (
        <UserContext.Provider value = {{loggedIn, user, login, logout}}>
            {children}
        </UserContext.Provider>
    )
}
export default UserProvider;