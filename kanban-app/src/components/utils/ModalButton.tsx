import type { ElementType } from "react";

interface ModalButtonProp {
    icon: ElementType;
    btnName: string;
    onClick: () => void;
    color: string;
}

function ModalButton({ icon: Icon, btnName, onClick, color }: ModalButtonProp) {
    return (
        <button
            className={`p-1.5 hover:bg-${color}-300 rounded-sm font-medium flex gap-2 items-center text-[14px] `}
            onClick={onClick}
        >
            <Icon size={18} color={color} />
            <span>{btnName}</span>
        </button>
    );
}

export default ModalButton;
