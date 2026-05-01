import {
    offset,
    useDismiss,
    useFloating,
    useInteractions,
} from "@floating-ui/react";
import { usePopOver } from "./store";
import type { ElementType } from "react";
import Popover from "./Popover";

interface ButtonPopOverType {
    item: string;
    icon: ElementType;
    size: number;
    onRename: () => void;
    onDelete: () => void;
}

function ButtonPopOver({
    item,
    icon: Icon,
    size,
    onRename,
    onDelete,
}: ButtonPopOverType) {
    const { activePop, isPop } = usePopOver();

    const { refs, floatingStyles, context } = useFloating({
        placement: "right-start",
        middleware: [offset(-10)],
        open: activePop === item,
        onOpenChange: (open) => {
            if (!open) isPop("");
        },
    });

    //Use dismiss hook from floating UI
    const dismiss = useDismiss(context);

    //Get the prop for  interaction
    const { getReferenceProps } = useInteractions([dismiss]);

    return (
        <>
            <button
                className="p-0.75 rounded-full hover:bg-gray-300"
                ref={activePop === item ? refs.setReference : null}
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    isPop(item);
                }}
                {...getReferenceProps()}
            >
                <Icon size={size} />
            </button>

            {activePop === item && (
                <Popover
                    floating={refs.setFloating}
                    floatingStyle={floatingStyles}
                    onRename={onRename}
                    onDelete={onDelete}
                />
            )}
        </>
    );
}

export default ButtonPopOver;
