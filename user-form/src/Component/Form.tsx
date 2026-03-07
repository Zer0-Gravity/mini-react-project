/* eslint-disable @typescript-eslint/no-explicit-any */
import { AlertCircle } from "lucide-react";
import type React from "react";

interface InputProps {
    Icon: React.ElementType;
    name: string;
    errors: any;
    type: string;
    placeholder: string;
    register: any;
    validationRules?: object;
    children?: React.ReactNode;
}

function Form({
    Icon,
    errors,
    name,
    type,
    register,
    validationRules,
    placeholder,
    children,
}: InputProps) {
    console.log("Field:", name, "Error Object:", errors);
    return (
        <div className="relative">
            <div
                className={`border-b-2 border-black flex gap-2 items-center relative ${errors && "border-red-500"}`}
            >
                <Icon className="w-5" />
                <input
                    {...register(name, validationRules)}
                    type={type}
                    className="flex-1 py-2 outline-none"
                    placeholder={placeholder}
                />
                {errors?.message && <AlertCircle size={18} color="red" />}
                {children}
            </div>
            {errors?.message && (
                <p className="text-small text-red-500 absolute right-0 ">
                    {errors.message as string}
                </p>
            )}
        </div>
    );
}

export default Form;
