import { Goal, HomeIcon, Repeat, Wallet } from "lucide-react";
import { NavLink } from "react-router";

function Navbar() {
    return (
        <nav className="h-200 w-12.5 border flex flex-col items-center justify-center gap-10 rounded-lg bg-primary">
            <NavLink to={"/"}>
                <HomeIcon color="#eae2b7" />
            </NavLink>
            <NavLink to={"/transaction"}>
                <Wallet color="#eae2b7" />
            </NavLink>
            <NavLink to={"/goal"}>
                <Goal color="#eae2b7" />
            </NavLink>
            <NavLink to={"/transfer"}>
                <Repeat color="#eae2b7" />
            </NavLink>
        </nav>
    );
}

export default Navbar;
