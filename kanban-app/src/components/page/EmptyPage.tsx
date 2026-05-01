function EmptyPage() {
    return (
        <main className="p-5 flex items-center justify-center h-full w-full">
            <div className="flex gap-3 items-center">
                <img
                    src="/Logo.png"
                    alt="logo"
                    className="aspect-square w-20"
                />
                <h1 className="text-5xl font-bold">O-Reilo</h1>
            </div>
        </main>
    );
}

export default EmptyPage;
