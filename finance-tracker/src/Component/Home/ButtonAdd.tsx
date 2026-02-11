import type { LucideIcon } from "lucide-react";
import { useNavigate } from "react-router";

interface ButtonProps {
    icon: LucideIcon;
    text: string;
    navigate: string;
}

function ButtonAdd({ icon: Icon, text, navigate }: ButtonProps) {
    const navigateTo = useNavigate();

    const navigateHandle = () => {
        navigateTo(navigate);
    };

    return (
        <>
            <button
                className="flex gap-2 text-secondary"
                onClick={navigateHandle}
            >
                <Icon size={20} />
                <span className="text-[14px] font-medium">{text}</span>
            </button>
        </>
    );
}

export default ButtonAdd;
