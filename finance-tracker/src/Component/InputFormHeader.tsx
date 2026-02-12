import { CircleX } from "lucide-react";
import { useNavigate } from "react-router";

interface HeaderProps {
    text: string;
}

function InputFormHeader({ text }: HeaderProps) {
    const navigate = useNavigate();
    //Navigate to previous page
    const previousPage = () => {
        navigate(-1);
    };

    return (
        <section className="flex justify-between mb-10">
            <h1 className="text-2xl font-bold text-secondary">{text}</h1>
            <button onClick={previousPage}>
                {/*Close page when button clicked*/}
                <CircleX className="text-secondary" size={20} />
            </button>
        </section>
    );
}

export default InputFormHeader;
