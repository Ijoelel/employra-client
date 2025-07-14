import { useState } from "react";
import type { User } from "../type";
import { FaRegCircleUser } from "react-icons/fa6";
import { useAuth } from "../hooks/useAuth";

export const Profile = ({ user }: { user: User }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { logout } = useAuth();
    return (
        <div
            className="flex items-center gap-4 cursor-pointer relative"
            onClick={() => {
                setIsOpen(!isOpen);
            }}
        >
            <FaRegCircleUser className="size-7 fill-primary" />
            <div className="flex flex-col justify-center">
                <p className="font-sans text-lg font-semibold text-gray-600">
                    {user.name}
                </p>
            </div>
            {isOpen && (
                <div
                    className="origin-top-right top-[110%] absolute z-10 right-0 mt-2 w-56 
                    rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5
                    focus:outline-none"
                    role="menu"
                >
                    <div className="py-1" role="none">
                        <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 
                            hover:bg-gray-100"
                            role="menuitem"
                        >
                            Deatail
                        </a>
                        <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700
                            hover:bg-gray-100"
                            role="menuitem"
                        >
                            Account Setting
                        </a>
                        <a
                            className="block px-4 py-2 text-sm text-gray-700
                            hover:bg-gray-100"
                            role="menuitem"
                            onClick={() => {
                                logout();
                            }}
                        >
                            Logout
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
};
