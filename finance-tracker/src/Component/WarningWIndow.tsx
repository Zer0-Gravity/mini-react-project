import { AlertCircle } from "lucide-react";
import { useWarning } from "../Store";

interface WarningProps {
    text: string;
}

function WarningWIndow({ text }: WarningProps) {
    const { setWarning } = useWarning();

    return (
        <main className="absolute bg-black/55 rounded-lg w-full h-full inset-0 z-1 flex justify-center items-center">
            <section className="bg-secondary w-125 min-h-35 rounded-lg flex flex-col p-4">
                <div className="flex flex-1 gap-3 items-center justify-center">
                    <AlertCircle size={40} color="red" />
                    <p className="text-[18px]">{text}</p>
                </div>
                <div className="flex justify-end">
                    <button
                        className="bg-primary text-secondary px-4 py-1 rounded-lg"
                        onClick={() => setWarning(false)}
                    >
                        Close
                    </button>
                </div>
            </section>
        </main>
    );
}

export default WarningWIndow;
