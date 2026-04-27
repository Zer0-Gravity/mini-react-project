import {
    offset,
    useDismiss,
    useFloating,
    useInteractions,
} from "@floating-ui/react";
import { MoreVertical, File } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Popover from "../utils/Popover";
import { usePopOver } from "../utils/store";

interface AccordionType {
    isOpen: boolean;
}

function Accordion({ isOpen }: AccordionType) {
    // const [activeId, setActiveId] = useState<string>("");
    const { activePop, isPop } = usePopOver();

    const { refs, floatingStyles, context } = useFloating({
        placement: "right-start",
        middleware: [offset(-10)],
        open: activePop !== null,
        onOpenChange: (open) => {
            if (!open) isPop("");
        },
    });

    //Use dismiss hook from floating UI
    const dismiss = useDismiss(context);

    //Get the prop for  interaction
    const { getReferenceProps } = useInteractions([dismiss]);

    return (
        <AnimatePresence>
            {isOpen && (
                <ul className="ml-4 mt-2 select-none cursor-pointer">
                    {["example", "dash", "test"].map((item, index) => (
                        <motion.li
                            key={item}
                            layout
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="group flex items-center gap-2 relative pl-4 pb-3 last:pb-0"
                            transition={{
                                delay: index * 0.1,
                                type: "spring",
                                damping: 20,
                                stiffness: 300,
                            }}
                        >
                            {/* Vertical line */}
                            <div className="absolute top-0 left-0 h-full bg-slate-800 w-0.5 group-last:h-1/2" />
                            {/* Horizontal line */}
                            <div className="absolute top-1/2 left-0 h-0.5 w-3 bg-slate-800" />

                            {/* Project name */}
                            <div className="flex justify-between w-full">
                                <div className="flex gap-2">
                                    <File size={20} />
                                    {item}
                                </div>
                                <button
                                    className="p-0.75 rounded-full hover:bg-gray-300"
                                    ref={
                                        activePop === item
                                            ? refs.setReference
                                            : null
                                    }
                                    onClick={() => isPop(item)}
                                    {...getReferenceProps()}
                                >
                                    <MoreVertical size={20} />
                                </button>
                            </div>

                            {activePop === item && (
                                <Popover
                                    floating={refs.setFloating}
                                    floatingStyle={floatingStyles}
                                />
                            )}
                        </motion.li>
                    ))}
                </ul>
            )}
        </AnimatePresence>
    );
}

export default Accordion;
