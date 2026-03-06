import { LockKeyhole, Mail } from "lucide-react";
import { Link } from "react-router";
import ButtonPassword from "../Utils/ButtonPassword";
import { useTogglePassword } from "../Utils/function";

function Login() {
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
                        <div className="border-b-2 flex gap-2 items-center">
                            <Mail className="w-5" />
                            <input
                                type="text"
                                placeholder="Email"
                                className="w-full py-2 outline-none autofill:bg-transparent"
                            />
                        </div>
                        <div className="border-b-2 flex gap-2 items-center">
                            <LockKeyhole className="w-5" />
                            <input
                                type={useTogglePassword()}
                                placeholder="Password"
                                className="flex-1 py-2 outline-none"
                            />
                            <ButtonPassword />
                        </div>
                    </form>
                    <div className="space-y-2">
                        <p className="text-center text-small">or</p>
                        <button className="bg-white h-12.5 rounded-lg flex text-med items-center justify-center w-full">
                            <img src="/Google-icon.svg" className="w-5 mr-3" />
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
                    <button className="w-full bg-button h-12.5 text-white rounded-lg text-med font-bold">
                        SIGN IN
                    </button>
                </div>
            </section>
        </main>
    );
}

export default Login;
