function Header() {
    return (
        <header className="flex justify-between w-[70%] sm:w-[90%] xs:w-[95%]">
            <img src="/images/logo-large.svg" alt="" />
            <div className="flex gap-2 items-center">
                <img src="/images/icon-personal-best.svg" alt="" />
                <h1 className="text-neutral-500">
                    Personal best:
                    <span className="text-neutral-200"> 92 WPM</span>
                </h1>
            </div>
        </header>
    );
}

export default Header;
