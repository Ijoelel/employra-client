import type React from "react";
import type { Ref } from "react";

interface InputProps {
    type?: "text" | "number" | "email" | "password" | "date" | "time" | string;
    id?: string;
    name?: string;
    placeholder?: string;
    value?: string | number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    min?: string;
    max?: string;
    step?: number;
    disabled?: boolean;
    success?: boolean;
    error?: boolean;
    hint?: string;
    ref?: Ref<HTMLInputElement>;
}

const Input = ({
    type = "text",
    id,
    name,
    placeholder,
    value,
    onChange,
    className = "",
    min,
    max,
    step,
    disabled = false,
    success = false,
    error = false,
    hint,
    ref,
}: InputProps) => {
    let inputClasses = ` h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden focus:ring-3  dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 ${className}`;

    if (disabled) {
        inputClasses += ` text-gray-500 border-gray-300 opacity-40 bg-gray-100 cursor-not-allowed dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700 opacity-40`;
    } else if (error) {
        inputClasses += `  border-red-500 focus:border-red-300 focus:ring-red-500/20 dark:text-red-400 dark:border-red-500 dark:focus:border-red-800`;
    } else if (success) {
        inputClasses += `  border-green-500 focus:border-green-300 focus:ring-green-500/20 dark:text-green-400 dark:border-green-500 dark:focus:border-green-800`;
    } else {
        inputClasses += ` bg-transparent text-gray-800 border-gray-300 focus:border-blue-300 focus:ring-blue-500/20 dark:border-gray-700 dark:text-white/90  dark:focus:border-blue-800`;
    }

    return (
        <div className="relative">
            <input
                type={type}
                id={id}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                min={min}
                max={max}
                step={step}
                disabled={disabled}
                className={inputClasses}
                ref={ref}
            />

            {hint && (
                <p
                    className={`mt-1.5 text-xs ${
                        error
                            ? "text-red-500"
                            : success
                            ? "text-green-500"
                            : "text-gray-500"
                    }`}
                >
                    {hint}
                </p>
            )}
        </div>
    );
};

export default Input;
