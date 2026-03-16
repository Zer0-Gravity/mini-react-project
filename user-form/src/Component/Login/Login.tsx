import { CircleAlert, LockKeyhole, Mail } from "lucide-react";
import { Link, useNavigate } from "react-router";
import ButtonPassword from "../Utils/ButtonPassword";
import {
    EMAIL_REGEX,
    PASSWORD_REGEX,
    useTogglePassword,
} from "../Utils/function";
import { useForm } from "react-hook-form";
import Form from "../Form";
import axios from "axios";
import { useState } from "react";
import { useAuthUser } from "../../store";

function Login() {
    const [errMsg, setErrMsg] = useState<string>("");
    const { setUser } = useAuthUser();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: "onChange" });

    const handleLogin = async (data: object) => {
        try {
            const response = await axios.post(
                "http://localhost:3500/api/login",
                data,
                {
                    withCredentials: true,
                },
            );
            console.log(response.data);
            setUser(response.data);
            navigate("/login-success");

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            if (error.response?.status === 409) {
                setErrMsg("No user found with the email");
            } else if (error.response?.status === 500) {
                setErrMsg("An error occurred, please try again");
            }
        }
    };

    return (
        <main className="min-h-screen w-full flex items-center justify-center">
            <section className="absolute inset-0 md:relative md:w-100 md:h-125">
                <img
                    src="/beach.jpg"
                    alt="beach"
                    className="object-cover h-full w-full md:rounded-l-2xl"
                />
            </section>
            <section className="relative z-10 h-screen w-full bg-white/35 flex flex-col justify-center backdrop-blur-[5px] md:w-100 md:h-125 md:bg-primary md:rounded-r-2xl ">
                <div className="mx-auto md:mx-10 space-y-3 min-w-75">
                    <p
                        className={`absolute bg-red-400 w-80 p-2 rounded-lg text-white flex gap-2 ${!errMsg ? "hidden" : "animate-fade-out"}`}
                    >
                        <CircleAlert /> <span>{errMsg}</span>
                    </p>
                    <h1 className="text-[30px] font-extrabold mb-10">
                        Welcome Back!!
                    </h1>
                    <form
                        className="space-y-6"
                        onSubmit={handleSubmit(handleLogin)}
                    >
                        <Form
                            Icon={Mail}
                            type="email"
                            name="email"
                            placeholder="Email"
                            register={register}
                            errors={errors.email}
                            validationRules={{
                                required: "Email is required",
                                pattern: {
                                    value: EMAIL_REGEX,
                                    message: "Please enter valid input",
                                },
                            }}
                        />
                        <Form
                            Icon={LockKeyhole}
                            type={useTogglePassword()}
                            name="password"
                            placeholder="Password"
                            register={register}
                            errors={errors.password}
                            validationRules={{
                                required: "Password is required",
                                pattern: {
                                    value: PASSWORD_REGEX,
                                    message:
                                        "Password need to be 8 character length. included one of Uppercase, Symbol and Number",
                                },
                            }}
                        >
                            <ButtonPassword />
                        </Form>

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
