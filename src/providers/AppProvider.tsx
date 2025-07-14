import { AuthProvider } from "./AuthProvider";
import { SidebarProvider } from "./SidebarProvider";
import { ThemeProvider } from "./ThemeProvider";

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider>
            <SidebarProvider>
                <AuthProvider>{children}</AuthProvider>
            </SidebarProvider>
        </ThemeProvider>
    );
};
