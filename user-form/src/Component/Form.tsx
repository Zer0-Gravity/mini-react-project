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
        <div
            className={`border-b-2 flex gap-2 items-center relative ${errors ? "border-red-500" : "border-black"}`}
        >
            <Icon className="w-5" />
            <input
                {...register(name, validationRules)}
                type={type}
                className="flex-1 py-2 outline-none"
                placeholder={placeholder}
            />
            {errors?.message && (
                <>
                    <AlertCircle className="text-red-500 w-5" />
                    <p className="text-small absolute -bottom-5.5 right-0 text-red-500">
                        {errors.message as string}
                    </p>
                </>
            )}
            {children}
        </div>
    );
}

export default Form;
