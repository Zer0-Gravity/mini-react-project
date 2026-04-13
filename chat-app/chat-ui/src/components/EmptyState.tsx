function EmptyState() {
    return (
        <main className="bg-main-chat h-full w-full flex items-center justify-center">
            <img src="/" alt="" />
            <section className="flex flex-col items-center text-primary-text space-y-2">
                <h1 className="font-bold text-[45px] ">Welcome to U-TALK👋 </h1>
                <p className="font-medium italic text-[18px]">
                    Your real-time hub for conversations.
                </p>
                <p className="text-[14px]">
                    👉 Choose a channel from the sidebar or create a new one to
                    connect with others!!
                </p>
            </section>
        </main>
    );
}

export default EmptyState;
