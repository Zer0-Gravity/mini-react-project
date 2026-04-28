import { Check, Plus, Search, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

function SearchAndCreate() {
    const [searchValue, setSearchValue] = useState<string>("");
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const isSearch = searchValue.length > 0;
    const [isNew, setIsNew] = useState<boolean>(false);
    const isExpanded = isFocused || searchValue.length > 0;

    return (
        <>
            <section className="flex gap-2">
                {/* Create new project */}
                <button
                    className={`${isExpanded ? "w-10 h-8.75" : "flex-1"} flex items-center justify-center gap-2 bg-orange-300 rounded-[5px]`}
                    onClick={() => setIsNew(true)}
                >
                    <Plus className="shrink-0" />
                    <p
                        className={`${isExpanded ? "hidden" : "block"} font-semibold`}
                    >
                        Create Project
                    </p>
                </button>

                {/* Search Project */}
                <div
                    className={`${isExpanded ? "flex-1" : "w-10"} h-8.75 bg-orange-300 rounded-[5px] relative`}
                >
                    <input
                        type="search"
                        className="w-full h-full outline-none p-2"
                        value={searchValue}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        onChange={(e) => setSearchValue(e.target.value)}
                        placeholder={isExpanded ? "Search project..." : ""}
                    />
                    <Search
                        className={`absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none ${searchValue.length >= 1 ? "hidden" : "block"}`}
                        size={20}
                    />
                </div>
            </section>

            {isSearch && (
                <AnimatePresence>
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="p-2 bg-amber-400 rounded-lg"
                    >
                        <p className="text-center text-[14px] font-medium">
                            No project found
                        </p>
                    </motion.div>
                </AnimatePresence>
            )}
            {isNew && !isSearch && (
                <AnimatePresence>
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="p-2 flex items-center bg-amber-400 rounded-lg gap-1"
                    >
                        <input
                            type="text"
                            placeholder="New project"
                            className="flex-1 h-full p-1.5 outline-none"
                        />
                        <div className="flex items-center">
                            <button className="p-0.75 hover:bg-amber-300 rounded-full">
                                <Check size={18} color="green" />
                            </button>
                            <button
                                onClick={() => setIsNew(false)}
                                className="p-0.75 hover:bg-amber-300 rounded-full"
                            >
                                <X size={18} color="red" />
                            </button>
                        </div>
                    </motion.div>
                </AnimatePresence>
            )}
        </>
    );
}

export default SearchAndCreate;
