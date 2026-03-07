import { LockKeyhole, Mail } from "lucide-react";
import { Link } from "react-router";
import Form from "../Form";
import { useForm } from "react-hook-form";
import {
    EMAIL_REGEX,
    PASSWORD_REGEX,
    useTogglePassword,
} from "../Utils/function";
import ButtonPassword from "../Utils/ButtonPassword";

function Register() {
    const {
        register,
        watch,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: "onChange" });

    const handleRegister = (data: object) => {
        console.log(data);
        console.log("clicked");
    };
    // eslint-disable-next-line react-hooks/incompatible-library
    const passwordRepeat = watch("password");
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
                <div className="mx-auto md:mx-10 space-y-4 min-w-75 ">
                    {/* <p className="absolute bg-red-400 w-80 p-2 rounded-lg text-white flex gap-2">
                        <CircleAlert /> <span>Username has been taken</span>
                    </p> */}
                    <h1 className="text-[30px] font-extrabold">Registration</h1>
                    <form
                        className="space-y-4"
                        onSubmit={handleSubmit(handleRegister)}
                    >
                        <div className="flex gap-2">
                            <div className="flex-1">
                                <Form
                                    type="text"
                                    name="firstname"
                                    placeholder="First Name"
                                    register={register}
                                    errors={errors.firstname}
                                    validationRules={{
                                        required: "Firstname required",
                                    }}
                                />
                            </div>
                            <div className="flex-1">
                                <Form
                                    type="text"
                                    name="lastname"
                                    placeholder="Last Name"
                                    register={register}
                                    errors={errors.lastname}
                                    validationRules={{
                                        required: "Lastname required",
                                    }}
                                />
                            </div>
                        </div>
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
                        <Form
                            Icon={LockKeyhole}
                            type={useTogglePassword()}
                            name="repeatpassword"
                            placeholder="Repeat Password"
                            register={register}
                            errors={errors.repeatpassword}
                            validationRules={{
                                required: "Please confirm your password",
                                validate: (value: string) =>
                                    value === passwordRepeat ||
                                    "Password do not match",
                            }}
                        >
                            <ButtonPassword />
                        </Form>
                        <p className="text-small">
                            Already have an account?
                            <Link to="/" className="text-secondary underline">
                                Sign In
                            </Link>
                        </p>
                        <button
                            type="submit"
                            className="w-full bg-button h-12.5 text-white rounded-lg text-med font-bold"
                        >
                            Sign In
                        </button>
                    </form>
                </div>
            </section>
        </main>
    );
}

export default Register;
