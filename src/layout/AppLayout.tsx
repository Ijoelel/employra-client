import { SidebarProvider } from "../providers/SidebarProvider";
import { useSidebar } from "../hooks/useSidebar";
import { Outlet, useNavigate } from "react-router";
import AppHeader from "./AppHeader";
import AppSidebar from "./AppSidebar";
import { useEffect } from "react";
import type { User } from "../type";
import { useAuth } from "../hooks/useAuth";

const LayoutContent = () => {
    const { isExpanded, isHovered, isMobileOpen } = useSidebar();

    const { currentUser }: { currentUser: User } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (currentUser && currentUser.id) {
            console.log("User is logged in:", currentUser);
        } else {
            console.log("No user is logged in.");
            navigate("/login");
        }
    }, [currentUser, navigate]);

    return (
        <div className="min-h-screen xl:flex">
            <div>
                <AppSidebar />
            </div>
            <div
                className={`flex-1 transition-all duration-300 ease-in-out dark:bg-gray-900 ${
                    isExpanded || isHovered ? "lg:ml-[290px]" : "lg:ml-[90px]"
                } ${isMobileOpen ? "ml-0" : ""}`}
            >
                <AppHeader />
                <div className="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

const AppLayout = () => {
    return (
        <SidebarProvider>
            <LayoutContent />
        </SidebarProvider>
    );
};

export default AppLayout;
