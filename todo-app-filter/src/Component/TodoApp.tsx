import { useState } from "react";
import TableTodo from "./TableTodo";
import { FaFilter } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import Dropdown from "./Dropdown";
import Modal from "./Modal";

interface TodoProps {
    title: string;
    context: string;
    tag: string;
    done: boolean;
}

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
    const [title, setTitle] = useState<string>("");
    const [context, setContext] = useState<string>("");
    const [tag, setTag] = useState<string>("");
    const [tagFilter, setTagFilter] = useState<string>("");
    const [searchQuery, setSearchQuery] = useState<string>("");

    const handleDeleteTodos = (index: number) => {
        setTodos(todos.filter((_, i) => index !== i));
    };

    const handleTagChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setTag(val ? val : "");
    };

    const handleTagFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        const isChecked = e.target.checked;
        setTagFilter(isChecked ? val : "");
    };

    const handleSubmitTodo = () => {
        const newTodo: TodoProps = {
            title: title,
            tag: tag,
            context: context,
            done: false,
        };

        setTodos((prev) => [...prev, newTodo]);
    };

    const filterTodos = todos.filter((todo) => {
        const matchSearch = todo.title
            .toLowerCase()
            .includes(searchQuery.toLowerCase());
        const matchTag =
            !tagFilter || tagFilter === "" || todo.tag === tagFilter;

        return matchSearch && matchTag;
    });

    return (
        <div className="w-150 h-[400] border p-4">
            <section>
                <h1 className="font-bold text-xl">
                    TODO APP <span className="text-xs">with filter</span>
                </h1>

                <div>
                    <input
                        type="search"
                        placeholder="Search.."
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                <div className="flex">
                    <div>
                        <button onClick={() => setIsModal(true)}>Add</button>
                        {isModal && (
                            <Modal
                                onClose={() => setIsModal(false)}
                                data={{ setTitle, setContext, handleTagChange }}
                                onSubmit={handleSubmitTodo}
                            />
                        )}
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

                        {dropdown && (
                            <Dropdown
                                handleTagFilter={handleTagFilter}
                                tagFilter={tagFilter}
                            />
                        )}
                    </div>
                </div>
            </section>
            <section>
                <TableTodo todos={filterTodos} delTodo={handleDeleteTodos} />
            </section>
        </div>
    );
}

export default TodoApp;
