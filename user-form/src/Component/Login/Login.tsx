import { AlertCircle, LockKeyhole, Mail } from "lucide-react";
import { Link } from "react-router";
import ButtonPassword from "../Utils/ButtonPassword";
import {
    EMAIL_REGEX,
    PASSWORD_REGEX,
    useTogglePassword,
} from "../Utils/function";
import { useState } from "react";
import { useForm } from "react-hook-form";

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: "onChange" });

    return (
        <main className="min-h-screen w-full flex items-center justify-center">
            <section className="absolute inset-0 md:relative md:w-100 md:h-125">
                <img
                    src="/beach.jpg"
                    alt="beach"
                    className="object-cover h-full w-full md:rounded-l-2xl"
                />
            </section>
            <section className="relative z-10 h-screen w-full bg-white/20 flex flex-col justify-center backdrop-blur-[5px] md:w-100 md:h-125 md:bg-primary md:rounded-r-2xl ">
                <div className="mx-auto md:mx-10 space-y-3 min-w-75">
                    {/* <p className="absolute bg-red-400 w-80 p-2 rounded-lg text-white flex gap-2">
                        <CircleAlert /> <span>Username has been taken</span>
                    </p> */}
                    <h1 className="text-[30px] font-extrabold mb-10">
                        Welcome Back!!
                    </h1>
                    <form className="space-y-6">
                        <div
                            className={`border-b-2 flex gap-2 items-center relative ${errors.email ? "border-red-500" : "border-black"}`}
                        >
                            <Mail className="w-5" />
                            <input
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: EMAIL_REGEX,
                                        message: "Please enter valid email",
                                    },
                                })}
                                className="flex-1 py-2 outline-none"
                                placeholder="Email"
                            />
                            {errors.email?.message && (
                                <>
                                    <AlertCircle className="text-red-500 w-5" />
                                    <p className="text-small absolute -bottom-5.5 right-0 text-red-500">
                                        {errors.email?.message as string}
                                    </p>
                                </>
                            )}
                        </div>
                        <div
                            className={`border-b-2 flex gap-2 items-center relative ${errors.password ? "border-red-500" : "border-black"}`}
                        >
                            <LockKeyhole className="w-5" />
                            <input
                                {...register("password", {
                                    required: "Password is required",
                                    pattern: {
                                        value: PASSWORD_REGEX,
                                        message:
                                            "Password need at least 8 character length, have an uppercase, symbol, and number",
                                    },
                                })}
                                type={useTogglePassword()}
                                className="flex-1 py-2 outline-none"
                                placeholder="Email"
                            />
                            {errors.password && (
                                <p className="text-small absolute -bottom-5.5 right-0 text-red-500">
                                    {errors.password?.message as string}
                                </p>
                            )}
                            <ButtonPassword />
                        </div>
                        <div className="space-y-2">
                            <p className="text-center text-small">or</p>
                            <button
                                type="button"
                                className="bg-white h-12.5 rounded-lg flex text-med items-center justify-center w-full"
                            >
                                <img
                                    src="/Google-icon.svg"
                                    className="w-5 mr-3"
                                />
                                Sign in with Google
                            </button>
                        </div>
                        <p className="text-small">
                            Don't have account yet?
                            <Link
                                to="/register"
                                className="text-secondary underline"
                            >
                                Sign Up
                            </Link>
                        </p>
                        <button
                            type="submit"
                            className="w-full bg-button h-12.5 text-white rounded-lg text-med font-bold"
                        >
                            SIGN IN
                        </button>
                    </form>
                </div>
            </section>
        </main>
    );
}

export default Login;
