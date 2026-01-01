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
        <div className="fixed h-screen border-r p-4">
            <h1>LOGO</h1>
            <ul className="space-y-4">
                <ChildrenList icon={<FaHome size={25} />} desc={"Home"} />
                <ChildrenList
                    icon={<FaBriefcase size={25} />}
                    desc={"Manager"}
                />
                <ChildrenList icon={<FaKey size={25} />} desc={"Admin"} />
                <ChildrenList icon={<FaPen size={25} />} desc={"Editor"} />
                <ChildrenList icon={<FaUserCircle size={25} />} desc={"User"} />
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
        <li className="flex gap-4">
            {icon}
            <span>{desc}</span>
        </li>
    );
}

export default Sidebar;
