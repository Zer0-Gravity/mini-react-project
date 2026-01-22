import Header from "./Header";

function Result() {
    return (
        <main className="flex flex-col items-center">
            {/* Header section */}
            <Header />

            <section className="flex-1 flex flex-col items-center justify-center md:w-full">
                <img src="/images/icon-completed.svg" alt="complete" />
                <h1>Test Complete</h1>
                <p>Solid run. Keep pushing to beat your high score</p>
            </section>

            <button>
                <img src="/images/icon-restart.svg" alt="" />
                <span>Play again</span>
            </button>
        </main>
    );
}

export default Result;
