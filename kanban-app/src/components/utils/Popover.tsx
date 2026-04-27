import { PenLine, Trash } from "lucide-react";
import type React from "react";
import type { ElementType } from "react";

interface PopoverType {
    floating: (node: HTMLElement | null) => void;
    floatingStyle: React.CSSProperties;
}

function Popover({ floating, floatingStyle }: PopoverType) {
    return (
        <div
            className="absolute right-0 p-2 flex flex-col gap-1 bg-gray-100 shadow-lg rounded-lg w-fit"
            ref={floating}
            style={floatingStyle}
        >
            <ButtonPop desc="Rename" icon={PenLine} color="green" />
            <ButtonPop desc="Delete" icon={Trash} color="red" />
        </div>
    );
}

interface ButtonType {
    desc: string;
    color: string;
    icon: ElementType;
}

function ButtonPop({ desc, icon: Icon, color }: ButtonType) {
    return (
        <button className={`flex gap-2 items-center text-${color}-600`}>
            <Icon size={18} />
            <span>{desc}</span>
        </button>
    );
}

export default Popover;
