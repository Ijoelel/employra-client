import { useRef, useState } from "react";
import Button from "../../components/form/Button";
import { useAuth } from "../../hooks/useAuth";
import AuthLayout from "./AuthPageLayout";
import { Link } from "react-router";
import { EyeCloseIcon, EyeIcon } from "../../icons";
import Label from "../../components/form/Label";
import Input from "../../components/form/Input";

const Login = () => {
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const [showPassword, setShowPassword] = useState(false);

    const { login } = useAuth();

    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        if (
            usernameRef &&
            usernameRef.current?.value &&
            passwordRef &&
            passwordRef.current?.value
        ) {
            console.log(
                login({
                    username: usernameRef.current?.value,
                    password: passwordRef.current?.value,
                })
            );
        } else {
            alert("Please Input username & password");
        }
    };
    return (
        <>
            <AuthLayout>
                <div className="flex flex-col flex-1">
                    <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
                        <div className="p-8 drop-shadow-xl rounded-lg bg-gray-100 dark:bg-gray-800">
                            <div className="mb-5 sm:mb-8">
                                <h1 className="mb-2 font-semibold text-gray-800 text-title-sm dark:text-white/90 sm:text-title-md text-3xl">
                                    Sign In
                                </h1>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Enter your email and password to sign in!
                                </p>
                            </div>
                            <div>
                                <form>
                                    <div className="space-y-6">
                                        <div>
                                            <Label>
                                                Username{" "}
                                                <span className="text-red-500">
                                                    *
                                                </span>{" "}
                                            </Label>
                                            <Input
                                                placeholder="johndoe"
                                                name="username"
                                                id="username"
                                                ref={usernameRef}
                                            />
                                        </div>
                                        <div>
                                            <Label>
                                                Password{" "}
                                                <span className="text-red-500">
                                                    *
                                                </span>{" "}
                                            </Label>
                                            <div className="relative">
                                                <Input
                                                    type={
                                                        showPassword
                                                            ? "text"
                                                            : "password"
                                                    }
                                                    placeholder="Enter your password"
                                                    name="password"
                                                    id="password"
                                                    ref={passwordRef}
                                                />
                                                <span
                                                    onClick={() =>
                                                        setShowPassword(
                                                            !showPassword
                                                        )
                                                    }
                                                    className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
                                                >
                                                    {showPassword ? (
                                                        <EyeIcon />
                                                    ) : (
                                                        <EyeCloseIcon />
                                                    )}
                                                </span>
                                            </div>
                                        </div>
                                        <Link
                                            to="/reset-password"
                                            className="text-sm text-blue-500 hover:text-blue-600 dark:text-blue-400"
                                        >
                                            Forgot password?
                                        </Link>
                                        <div className="mt-2">
                                            <Button
                                                className="w-full "
                                                size="sm"
                                                onClick={handleSubmit}
                                            >
                                                Sign in
                                            </Button>
                                        </div>
                                    </div>
                                </form>

                                <div className="mt-5">
                                    <p className="text-sm font-normal text-center text-gray-700 dark:text-gray-400 sm:text-start">
                                        Don&apos;t have an account? {""}
                                        <Link
                                            to="/signup"
                                            className="text-blue-500 hover:text-blue-600 dark:text-blue-400"
                                        >
                                            Sign Up
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AuthLayout>
        </>
        // <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        //     <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        //         <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        //         <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
        //             <div className="max-w-md mx-auto">
        //                 <div>
        //                     <h1 className="text-2xl font-semibold">Login</h1>
        //                 </div>
        //                 <div className="divide-y divide-gray-200">
        //                     <form
        //                         onSubmit={handleSubmit}
        //                         className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
        //                     >
        //                         <Input
        //                             autoComplete="off"
        //                             id="username"
        //                             name="username"
        //                             type="text"
        //                             placeholder="Username"
        //                             ref={usernameRef}
        //                         >
        //                             Username
        //                         </Input>
        //                         <Input
        //                             autoComplete="off"
        //                             id="password"
        //                             name="password"
        //                             type="password"
        //                             placeholder="Password"
        //                             ref={passwordRef}
        //                         >
        //                             Password
        //                         </Input>
        //                         <Button>Submit</Button>
        //                     </form>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
};

export default Login;
