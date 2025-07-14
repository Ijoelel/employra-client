import React, { useEffect } from "react";
import ThemeTogglerTwo from "../../components/common/ThemeToggler";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    const { currentUser } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (currentUser.id) {
            navigate("/");
        }
    }, [currentUser, navigate]);
    return (
        <div className="relative p-6 bg-white z-1 dark:bg-gray-900 sm:p-0">
            <div className="relative flex flex-col justify-center w-full h-screen lg:flex-row dark:bg-gray-900 sm:p-0">
                {children}
                <div className="fixed z-50 hidden bottom-6 right-6 sm:block">
                    <ThemeTogglerTwo />
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;
