interface HeaderProps {
    score: number;
}

function Header({ score }: HeaderProps) {
    return (
        <header className="flex justify-between custom-width">
            <img src="/images/logo-large.svg" alt="" />
            <div className="flex gap-2 items-center">
                <img src="/images/icon-personal-best.svg" alt="" />
                <h1 className="text-neutral-500">
                    Personal best:
                    <span className="text-neutral-200">
                        {score ? score : "0"} WPM
                    </span>
                </h1>
            </div>
        </header>
    );
}

export default Header;
