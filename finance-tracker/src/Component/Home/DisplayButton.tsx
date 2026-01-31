import type { LucideIcon } from "lucide-react";

interface ButtonProps {
    icon: LucideIcon;
    text: string;
}

function DisplayButton({ icon: Icon, text }: ButtonProps) {
    return (
        <div className="flex flex-col items-center gap-2">
            <button className="w-12.5 h-12.5 rounded-full bg-button flex items-center justify-center">
                {<Icon size={20} color="white" />}
            </button>
            <span className="font-medium text-primary">{text}</span>
        </div>
    );
}

export default DisplayButton;
