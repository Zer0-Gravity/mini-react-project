import { Trash } from "lucide-react";

function TransferHistory() {
    return (
        <main className="container-custom">
            <h1 className="font-bold text-[25px] text-secondary">
                Transfer History
            </h1>

            <section>
                <input
                    type="text"
                    className="search-query"
                    placeholder="Search Transfer"
                />
            </section>

            <section className="w-full bg-secondary p-4 flex flex-col rounded-lg">
                <p className="text-[14px] font-medium italic mb-2">
                    {`Transaction date : thu,, 232`}
                </p>
                <div className="flex ">
                    <div className="w-80 grid grid-cols-[80px_auto]">
                        <span className="font-medium">Name</span>{" "}
                        <span className="font-light">: Emiru</span>
                        <span className="font-medium">Amount</span>{" "}
                        <span>: Emiru.mail</span>
                        <span className="font-medium">Address</span>
                        <span>: yhvd-dwuhhud-hadwhu-43hhi</span>
                        <span className="font-medium">Email</span>{" "}
                        <span>: Email</span>
                    </div>
                    <div className="space-y-2 flex-1">
                        <p className="border p-2 text-center rounded-sm w-20">
                            Sended
                        </p>
                        <div className="w-40 h-20 border rounded-lg border-primary grid place-items-center">
                            <h1 className="text-xl font-medium">Credit Card</h1>
                        </div>
                    </div>
                    <button className="flex justify-end">
                        <Trash />
                    </button>
                </div>
            </section>
        </main>
    );
}

export default TransferHistory;
