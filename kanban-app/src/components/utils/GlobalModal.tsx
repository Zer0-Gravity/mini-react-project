import { AlertTriangle, Check, Trash, X } from "lucide-react";

function GlobalModal() {
    return (
        <main className="absolute inset-0 bg-black/50 z-20 flex items-center justify-center">
            <div className="bg-white p-4 w-100 space-y-3 rounded-lg">
                <div className="space-y-3">
                    <h1 className="font-semibold text-lg">
                        Rename this project
                    </h1>
                    <input
                        type="text"
                        className="p-2 w-full bg-gray-300 rounded-sm outline-none"
                    />
                    <div className="flex justify-end gap-2">
                        <button className="p-1.5 hover:bg-red-300 rounded-sm font-medium flex gap-2 items-center text-[14px]">
                            <X size={18} color="red" />
                            <span>Cancel</span>
                        </button>
                        <button className="p-1.5 hover:bg-green-300 rounded-sm font-medium flex gap-2 items-center text-[14px]">
                            <Check size={18} color="green" />
                            <span>Rename</span>
                        </button>
                    </div>

                    <div className="space-y-3">
                        <h1 className="flex gap-2 items-center">
                            <AlertTriangle size={18} color="red" />
                            <span className="font-semibold text-lg">
                                Delete project
                            </span>
                        </h1>
                        <p className="text-[14px]">
                            Are you sure to delete this project?. This action
                            can't be undone and will permanently delete your
                            data and its content alongside it
                        </p>
                        <div className="flex justify-end gap-2">
                            <button className="p-1.5 hover:bg-red-300 rounded-sm font-medium flex gap-2 items-center text-[14px]">
                                <X size={18} color="red" />
                                <span>Cancel</span>
                            </button>
                            <button className="p-1.5 hover:bg-green-300 rounded-sm font-medium flex gap-2 items-center text-[14px]">
                                <Trash size={18} color="green" />
                                <span>Delete</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default GlobalModal;
