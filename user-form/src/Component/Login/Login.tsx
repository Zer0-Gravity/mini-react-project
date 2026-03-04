import { Eye, LockKeyhole, Mail } from "lucide-react";
import { Link } from "react-router";

function Login() {
    return (
        <main className="min-h-screen w-full flex items-center justify-center">
            <section className="absolute inset-0">
                <img
                    src="/beach.jpg"
                    alt="beach"
                    className="object-cover h-full w-full"
                />
            </section>
            <section className="relative z-10 h-screen w-full bg-white/20 flex flex-col justify-center backdrop-blur-[5px]">
                <div className="mx-10 space-y-3">
                    <h1 className="text-[30px] font-extrabold">
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
                                type="password"
                                placeholder="Password"
                                className="flex-1 py-2 outline-none"
                            />
                            <Eye className="w-5" />
                        </div>
                    </form>
                    <div>
                        <p className="text-center text-small">or</p>
                        <button className="bg-white h-12.5 rounded-lg flex text-big items-center justify-center w-full">
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
                    <button className="w-full bg-button h-12.5 text-white rounded-lg text-big font-bold">
                        Sign In
                    </button>
                </div>
            </section>
        </main>
    );
}

export default Login;
