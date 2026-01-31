import { Goal, HomeIcon, Wallet } from "lucide-react";
import { NavLink } from "react-router";

function Navbar() {
    return (
        <nav className="h-200 w-12.5 border flex flex-col items-center justify-center gap-10">
            <NavLink to={"/"}>
                <HomeIcon />
            </NavLink>
            <NavLink to={"/transaction"}>
                <Wallet />
            </NavLink>
            <NavLink to={"/goal"}>
                <Goal />
            </NavLink>
        </nav>
    );
}

export default Navbar;
