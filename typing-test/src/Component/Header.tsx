interface HeaderProps {
    score: number;
}

function Header({ score }: HeaderProps) {
    return (
        <header className="flex justify-between custom-width">
            <img
                src="/images/logo-large.svg"
                alt="logo"
                className="sm:block xs:hidden"
            />
            <img
                src="/images/logo-small.svg"
                alt="logo"
                className="sm:hidden"
            />
            <div className="flex gap-2 items-center">
                <img src="/images/icon-personal-best.svg" alt="logo-record" />
                <h1 className="text-neutral-500">
                    Personal best:
                    <span className="text-neutral-200">{score} WPM</span>
                </h1>
            </div>
        </header>
    );
}

export default Header;
