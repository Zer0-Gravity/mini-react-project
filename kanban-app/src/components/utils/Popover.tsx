import { PenLine, Trash } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import type React from "react";
import type { ElementType } from "react";
import { usePopOver } from "./store";

interface PopoverType {
    floating: (node: HTMLElement | null) => void;
    floatingStyle: React.CSSProperties;
    onRename: () => void;
    onDelete: () => void;
}

function Popover({ floating, floatingStyle, onDelete, onRename }: PopoverType) {
    return (
        <AnimatePresence>
            <motion.div
                className="right-0 p-2 flex flex-col gap-1.5 bg-gray-100 shadow-lg rounded-lg w-40 z-20"
                ref={floating}
                style={floatingStyle}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <ButtonPop
                    desc="Rename"
                    icon={PenLine}
                    color="green"
                    onClick={onRename}
                />
                <ButtonPop
                    desc="Delete"
                    icon={Trash}
                    color="red"
                    onClick={onDelete}
                />
            </motion.div>
        </AnimatePresence>
    );
}

interface ButtonType {
    desc: string;
    color: string;
    icon: ElementType;
    onClick: () => void;
}

function ButtonPop({ desc, icon: Icon, color, onClick }: ButtonType) {
    const { isPop } = usePopOver();
    return (
        <button
            className={`flex gap-2 items-center text-${color}-600 hover:bg-gray-200 p-0.5 rounded-sm`}
            onClick={() => {
                onClick();
                isPop("");
            }}
        >
            <Icon size={18} />
            <span>{desc}</span>
        </button>
    );
}

export default Popover;
