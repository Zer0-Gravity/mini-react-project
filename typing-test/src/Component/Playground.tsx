import { dataTyping } from "../Utils/DataTyping";

function Playground() {
    return (
        <>
            <div>
                <p className="text-justify text-neutral-300 text-[20px]">
                    {dataTyping.easy.map((item) => item.text)}
                </p>
            </div>
            <input type="text" />
        </>
    );
}

export default Playground;
