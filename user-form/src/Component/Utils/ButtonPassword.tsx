import { Eye, EyeOff } from "lucide-react";
import { usePassword } from "../../store";

function ButtonPassword() {
    const { setTogglePass, togglePass } = usePassword();
    return (
        <button
            onClick={(e) => {
                setTogglePass();
                e.preventDefault();
            }}
        >
            {togglePass ? <Eye className="w-5" /> : <EyeOff className="w-5" />}
        </button>
    );
}

export default ButtonPassword;
