import Input from "./Component/Input";

function TypingTest() {
    return (
        <main className="mt-10 flex flex-col gap-10 items-center">
            {/* Header Section */}
            <header className="flex justify-between w-[70%]">
                <img src="/images/logo-large.svg" alt="" />
                <div className="flex gap-2 items-center">
                    <img src="/images/icon-personal-best.svg" alt="" />
                    <h1 className="text-neutral-500">
                        Personal best:
                        <span className="text-neutral-200"> 92 WPM</span>
                    </h1>
                </div>
            </header>

            {/* Label section */}
            <section className="flex justify-between border-b border-b-neutral-500 w-[70%]">
                <div className="flex gap-10">
                    <h1 className="text-neutral-500">
                        WPM:
                        <span className="text-neutral-200 font-bold"> 40</span>
                    </h1>
                    <h1 className="text-neutral-500">
                        Accuracy:
                        <span className="text-red-500 font-bold"> 95%</span>
                    </h1>
                    <h1 className="text-neutral-500">
                        Time:
                        <span className="text-yellow-400 font-bold"> 0:46</span>
                    </h1>
                </div>

                {/* Control bar section */}
                <div className="flex mb-2 gap-10">
                    <div className="flex gap-3 items-center">
                        <h1 className="text-neutral-500">Difficulty: </h1>
                        <div className="space-x-1">
                            <Input text="Easy" value="easy" name="difficulty" />
                            <Input
                                text="Medium"
                                value="medium"
                                name="difficulty"
                            />
                            <Input text="Hard" value="hard" name="difficulty" />
                        </div>
                    </div>
                    <div className="flex gap-3 items-center">
                        <h1 className="text-neutral-500">Mode</h1>
                        <Input text="Timed(60s)" value="60" name="mode" />
                        <Input text="Passage" value="Passage" name="mode" />
                    </div>
                </div>
            </section>
        </main>
    );
}

export default TypingTest;
