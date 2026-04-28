import { MoreVertical, File } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import ButtonPopOver from "../utils/ButtonPopOver";
import { useProjectData } from "../utils/store";

interface AccordionType {
    isOpen: boolean;
}

function Accordion({ isOpen }: AccordionType) {
    const { projects } = useProjectData();

    return (
        <AnimatePresence>
            {isOpen && (
                <ul className="ml-4 mt-2 select-none cursor-pointer">
                    {Object.values(projects).map((item, index) => (
                        <motion.li
                            key={item.projectId}
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
                                    {item.projectName}
                                </div>
                                <ButtonPopOver
                                    item={item.projectId}
                                    icon={MoreVertical}
                                    size={18}
                                />
                            </div>
                        </motion.li>
                    ))}
                </ul>
            )}
        </AnimatePresence>
    );
}

export default Accordion;
