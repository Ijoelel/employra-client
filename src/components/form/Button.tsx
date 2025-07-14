import React from "react";

interface ButtonProps {
    children: React.ReactNode;
    size?: "sm" | "md";
    variant?: "primary" | "outline";
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    className?: string;
}

const Button = ({
    children,
    size = "md",
    variant = "primary",
    startIcon,
    endIcon,
    onClick,
    className = "",
    disabled = false,
}: ButtonProps) => {
    const sizeClasses = {
        sm: "px-4 py-2 text-sm",
        md: "px-5 py-3.5 text-sm",
    };

    const variantClasses = {
        primary:
            "bg-blue-500 text-white shadow-theme-xs hover:bg-blue-600 disabled:bg-blue-300",
        outline:
            "bg-white text-gray-700 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-400 dark:ring-gray-700 dark:hover:bg-white/[0.03] dark:hover:text-gray-300",
    };

    return (
        <button
            className={`inline-flex items-center justify-center gap-2 rounded-lg transition cursor-pointer ${className} ${
                sizeClasses[size]
            } ${variantClasses[variant]} ${
                disabled ? "cursor-not-allowed opacity-50" : ""
            }`}
            onClick={onClick}
            type="button"
            disabled={disabled}
        >
            {startIcon && (
                <span className="flex items-center">{startIcon}</span>
            )}
            {children}
            {endIcon && <span className="flex items-center">{endIcon}</span>}
        </button>
    );
};

export default Button;
