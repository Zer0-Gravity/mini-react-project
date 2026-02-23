import { useFinanceTrack } from "../../Store";
import { useState } from "react";
import TransferCard from "../TransferCard";

function TransferHistory() {
    const { transfers } = useFinanceTrack();
    const [query, setQuery] = useState<string>("");

    const filteredTransfer = transfers.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase()),
    );
    return (
        <main className="container-custom">
            <h1 className="font-bold text-[25px] text-secondary">
                Transfer History
            </h1>

            <section>
                <input
                    type="text"
                    className="search-query"
                    value={query}
                    placeholder="Search Name"
                    onChange={(e) => setQuery(e.target.value)}
                />
            </section>

            <section className="space-y-2 h-165 overflow-y-auto hide-scrollbar">
                {filteredTransfer.length !== 0 ? (
                    filteredTransfer.map((transfer) => (
                        <TransferCard key={transfer.id} data={transfer} />
                    ))
                ) : (
                    <h1 className="text-secondary text-center font-medium">
                        No transfer listed
                    </h1>
                )}
            </section>
        </main>
    );
}

export default TransferHistory;
