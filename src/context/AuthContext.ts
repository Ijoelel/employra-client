import { createContext } from "react";
import type { LoginRequest, User } from "../type";

type AuthContextType = {
    currentUser: User;
    login: (data: LoginRequest) => void;
    logout: () => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);
