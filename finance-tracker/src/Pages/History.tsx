import { Filter } from "lucide-react";
import TrackerCard from "../Component/TrackerCard";

function History() {
    return (
        <div className="container-custom">
            <h1 className="font-bold text-[25px] text-secondary">
                History Transaction
            </h1>
            <section>
                <input type="search" placeholder="Search Transaction" />
                <div className="flex text-secondary">
                    <h1>
                        <Filter /> Filter
                    </h1>
                </div>
            </section>
            <section className="space-y-1">
                <TrackerCard />
                <TrackerCard />
                <TrackerCard />
            </section>
        </div>
    );
}

export default History;
