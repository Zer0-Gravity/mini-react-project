import type { LucideIcon } from "lucide-react";

interface ButtonProps {
    icon: LucideIcon;
    text: string;
}

function ButtonAdd({ icon: Icon, text }: ButtonProps) {
    return (
        <>
            <button className="flex gap-2 text-secondary">
                <Icon size={20} />
                <span className="text-[14px] font-medium">{text}</span>
            </button>
        </>
    );
}

export default ButtonAdd;
