import axios from "axios";
import { Minus, Plus, Power, RefreshCcw } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useDataAuth } from "../../store";

function LoginSuccess() {
    const [count, setCount] = useState<number>(0);
    const navigate = useNavigate();
    const { data } = useDataAuth();

    const handleAdd = () => setCount(count + 1);
    const handleMin = () => setCount(count - 1);
    const handleRes = () => setCount(0);

    const handleLogout = async () => {
        try {
            const response = await axios.post(
                "http://localhost:3500/api/logout",
                {},
                {
                    withCredentials: true,
                },
            );
            console.log("Refresh token deleted", response.data);
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <main className="h-screen w-full flex items-center justify-center">
            <section className="flex flex-col mx-auto bg-primary h-full w-full md:w-200 md:h-125 items-center justify-center rounded-xl gap-3">
                <h1 className="text-[30px] font-bold">
                    {`Welcome, ${data?.firstName}`}
                    <span className="text-small ml-2">{data?.lastName}</span>
                </h1>
                <p className="text-small">You have logged in, Yay!!</p>
                <div className="flex flex-col items-center md:justify-end">
                    <h1 className="text-[40px] font-bold">{count}</h1>
                    <div className="space-x-2">
                        <button className="counter-button" onClick={handleRes}>
                            <RefreshCcw className="m-auto" />
                        </button>
                        <button className="counter-button" onClick={handleAdd}>
                            <Plus className="m-auto" />
                        </button>
                        <button className="counter-button" onClick={handleMin}>
                            <Minus className="m-auto" />
                        </button>
                    </div>
                </div>

                <div>
                    <p>{`${data?.email}`}</p>
                </div>
                <button
                    className="w-37.5 h-12.5 bg-button flex items-center justify-center text-white rounded-lg gap-2"
                    onClick={handleLogout}
                >
                    <Power size={20} /> <span>Log Out</span>
                </button>
            </section>
        </main>
    );
}

export default LoginSuccess;
