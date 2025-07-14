import { useState } from "react";
import { AuthContext } from "../context/AuthContext";
import type { LoginRequest, LoginResponse, User, UserDB } from "../type";
import { readData } from "../utils/db";

const defaultUser: User = {
    id: "",
    name: "",
    email: "",
    username: "",
    phone: "",
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [currentUser, setCurrentUser] = useState<User>(
        localStorage.getItem("session")
            ? JSON.parse(localStorage.getItem("session") as string)
            : defaultUser
    );

    const addSession = (data: string) => {
        localStorage.setItem("session", data);
        console.log("Successfully update session");
    };

    const deleteSession = () => {
        localStorage.removeItem("session");
    };

    const login = (data: LoginRequest): LoginResponse => {
        const usersData = readData("users");

        const authenticatedUser = usersData.filter(
            (user: UserDB) =>
                user.username === data.username &&
                user.password === data.password
        );

        if (authenticatedUser[0]) {
            addSession(JSON.stringify(authenticatedUser[0]));
            setCurrentUser(authenticatedUser[0]);

            return {
                status: "success",
                message: "Successfully Logged In",
                data: {
                    admin: authenticatedUser[0],
                    token: "fake-jwt-token",
                },
            };
        } else {
            alert("Invalid username or password");
            return {
                status: "error",
                message: "Invalid username or password",
            };
        }
    };

    const logout = () => {
        deleteSession();
        setCurrentUser(defaultUser);
    };

    return (
        <AuthContext.Provider value={{ currentUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
