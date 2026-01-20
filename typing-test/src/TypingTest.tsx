function TypingTest() {
    return (
        <main className="w-full">
            <header className="flex justify-around">
                <img src="/images/logo-large.svg" alt="" />
                <div>
                    <img src="/images/icon-personal-best.svg" alt="" />
                    <h1>Personal best: 92 WPM</h1>
                </div>
            </header>

            {/* Control bar section */}
            <section className="flex justify-around border-b">
                <div className="flex">
                    <h1>
                        WPM: <span>40</span>
                    </h1>
                    <h1>
                        Accuracy: <span>95%</span>
                    </h1>
                    <h1>
                        Time: <span>0:46</span>
                    </h1>
                </div>
                <div>
                    <div>
                        <h1>Difficulty</h1>
                    </div>
                    <div>
                        <h1>Mode</h1>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default TypingTest;
