import type { ReactNode } from "react";
import {
    FaBriefcase,
    FaHome,
    FaKey,
    FaPen,
    FaUserCircle,
} from "react-icons/fa";

function Sidebar() {
    return (
        <div className="fixed h-screen border-r p-4 flex flex-col gap-5">
            <h1 className="font-bold text-3xl text-light-text">FILTER</h1>
            <ul className="space-y-4">
                <ChildrenList icon={<FaHome size={15} />} desc={"Home"} />
                <ChildrenList
                    icon={<FaBriefcase size={15} />}
                    desc={"Manager"}
                />
                <ChildrenList icon={<FaKey size={15} />} desc={"Admin"} />
                <ChildrenList icon={<FaPen size={15} />} desc={"Editor"} />
                <ChildrenList icon={<FaUserCircle size={15} />} desc={"User"} />
            </ul>
        </div>
    );
}

interface ListProps {
    icon: ReactNode;
    desc: string;
}

function ChildrenList({ icon, desc }: ListProps) {
    return (
        <li className="flex gap-4 text-light-text items-center hover:bg-accent-color hover:text-dark-text">
            {icon}
            <span>{desc}</span>
        </li>
    );
}

export default Sidebar;
