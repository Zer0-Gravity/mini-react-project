import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router";

function RegisterSuccess() {
    const navigate = useNavigate();

    return (
        <main className="h-screen w-full flex items-center justify-center">
            <section className="flex flex-col mx-auto bg-primary h-full w-full md:w-200 md:h-125 items-center justify-center rounded-xl gap-3">
                <CheckCircle
                    strokeWidth={3}
                    size={100}
                    className="text-green-500"
                />
                <h1 className="text-[30px] font-bold">Registration Complete</h1>
                <p className="text-med font-light text-justify">
                    Thanks for joining us, please return to login page to
                    proceed
                </p>
                <button
                    className="bg-button text-big text-white font-medium w-50 h-12.5 rounded-lg"
                    onClick={() => navigate("/")}
                >
                    Back to login page
                </button>
            </section>
        </main>
    );
}

export default RegisterSuccess;
