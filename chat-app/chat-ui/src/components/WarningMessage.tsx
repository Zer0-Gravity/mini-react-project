import { AlertTriangle } from "lucide-react";
import type { SetStateAction } from "react";
import { useNavigate } from "react-router";

interface WarningType {
    setWarn: React.Dispatch<SetStateAction<boolean>>;
}

function WarningMessage({ setWarn }: WarningType) {
    const navigate = useNavigate();

    const handleWipeData = () => {
        //Delete local storage
        localStorage.clear();

        navigate("/");
        //Reload the page to apply to reflect the empty storage
        window.location.reload();
    };

    return (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="p-5 bg-main-chat w-[90%] md:w-120 rounded-lg flex flex-col gap-5">
                <div className="flex flex-col gap-2 flex-1 items-center justify-center">
                    <h1 className="font-bold text-[18px]">Wipe Data?</h1>
                    <p className="text-[14px]">
                        Are you sure you want to delete the data?
                    </p>
                    <p className="text-[14px]">You cant't undo this action</p>
                </div>
                <div className="flex gap-2 border-l-4 border-red-600 rounded-[5px] bg-message-input p-2">
                    <AlertTriangle size={30} color="red" />
                    <div className="space-y-2">
                        <p>Warning!</p>
                        <p className="text-[14px]">
                            By deleting the data you will lost all the data
                            including account and past message
                        </p>
                    </div>
                </div>
                <div className="flex justify-between sm:justify-end gap-2 text-black">
                    <button
                        className="p-1 w-full sm:w-18 rounded-lg bg-green-400"
                        onClick={handleWipeData}
                    >
                        Yes
                    </button>
                    <button
                        className="p-1 w-full sm:w-18 rounded-lg bg-red-400"
                        onClick={() => setWarn(false)}
                    >
                        No
                    </button>
                </div>
            </div>
        </div>
    );
}

export default WarningMessage;
