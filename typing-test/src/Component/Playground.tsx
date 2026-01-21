import type { LevelEntries } from "../Utils/Type";

interface PlaygroundProps {
    passage: LevelEntries;
}

function Playground({ passage }: PlaygroundProps) {
    return (
        <>
            <div>
                <p className="text-justify text-neutral-300 text-[20px]">
                    {passage.text}
                </p>
            </div>
            <input type="text" />
        </>
    );
}

export default Playground;
