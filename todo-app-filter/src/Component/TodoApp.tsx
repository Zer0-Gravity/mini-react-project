import { useState } from "react";
import TableTodo from "./TableTodo";
import { FaFilter } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import Dropdown from "./Dropdown";
import Modal from "./Modal";

interface TodoProps {
    title: string;
    context: string;
    tag: Tags;
    done: boolean;
}

type Tags = "Urgent" | "Quick" | "Personal" | "Important";

function TodoApp() {
    const [todos, setTodos] = useState<TodoProps[]>([
        {
            title: "Make Bread",
            tag: "Quick",
            context: "Cooking",
            done: false,
        },
        {
            title: "Finish homework",
            tag: "Urgent",
            context: "School",
            done: false,
        },
    ]);

    const [dropdown, setDropdown] = useState<boolean>(false);
    const [isModal, setIsModal] = useState<boolean>(false);

    const handleDeleteTodos = (index: number) => {
        setTodos(todos.filter((_, i) => index !== i));
    };

    return (
        <div className="w-[600px] h-[400] border p-4">
            <section>
                <h1 className="font-bold text-xl">
                    TODO APP <span className="text-xs">with filter</span>
                </h1>

                <div>
                    <input type="search" placeholder="Search.." />
                </div>

                <div className="flex">
                    <div>
                        <button onClick={() => setIsModal(true)}>Add</button>
                        {isModal && <Modal onClose={() => setIsModal(false)} />}
                    </div>
                    <div className="relative">
                        <button
                            className="flex items-center gap-1"
                            onClick={() => setDropdown(!dropdown)}
                        >
                            <FaFilter />
                            Filter
                            <IoMdArrowDropdown />
                        </button>

                        {dropdown && <Dropdown />}
                    </div>
                </div>
            </section>
            <section>
                <TableTodo todos={todos} delTodo={handleDeleteTodos} />
            </section>
        </div>
    );
}

export default TodoApp;
