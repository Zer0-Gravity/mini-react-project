import { Moon, Sun } from "lucide-react";
import { useTheme } from "../store";

function SliderTheme() {
    const { toggleTheme, isDark } = useTheme();

    return (
        <label className="switch">
            <input type="checkbox" checked={isDark} onChange={toggleTheme} />
            <span className="slider-box">
                <span className="slider-ball">
                    <Moon className="moon" />
                    <Sun className="sun" />
                </span>
            </span>
        </label>
    );
}

export default SliderTheme;
