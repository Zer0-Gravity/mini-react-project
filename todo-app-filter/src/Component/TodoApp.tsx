import { useEffect, useRef, useState } from "react";
import TableTodo from "./TableTodo";
import { FaFilter } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import Dropdown from "./Dropdown";
import Modal from "./Modal";
import { dummyTodos } from "../Utils/dummyData";

interface TodoProps {
    title: string;
    context: string;
    tag: string;
    status: Status;
}

type Status = "finish" | "unfinished";

function TodoApp() {
    const [todos, setTodos] = useState<TodoProps[]>(() => {
        const savedTodo = localStorage.getItem("todoList");

        if (savedTodo) {
            try {
                return JSON.parse(savedTodo);
            } catch (error) {
                console.error("error to parse todo", error);
                return dummyTodos;
            }
        }

        return dummyTodos;
    });
    const [dropdown, setDropdown] = useState<boolean>(false);
    const [isModal, setIsModal] = useState<boolean>(false);
    const [title, setTitle] = useState<string>("");
    const [context, setContext] = useState<string>("");
    const [tag, setTag] = useState<string>("");
    const [tagFilter, setTagFilter] = useState<string>("");
    const [searchQuery, setSearchQuery] = useState<string>("");
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        /* eslint-disable @typescript-eslint/no-explicit-any */
        const handleOutsideEvent = (e: any) => {
            if (
                dropdown &&
                dropdownRef.current &&
                !dropdownRef.current.contains(e.target as Node)
            ) {
                setDropdown(false);
            }
        };

        document.addEventListener("mousedown", handleOutsideEvent);
        return () =>
            document.removeEventListener("mousedown", handleOutsideEvent);
    });

    useEffect(() => {
        localStorage.setItem("todoList", JSON.stringify(todos));
    }, [todos]);

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
            status: "unfinished",
        };

        const addTodo = (prev: TodoProps[]) => [...prev, newTodo];

        if (title && context) {
            setTodos(addTodo);
            setTitle("");
            setTag("");
            setContext("");
            setIsModal(false);
        }
    };

    const handleCloseModal = () => {
        setIsModal(false);
        setTitle("");
        setTag("");
        setContext("");
    };

    const handleCheckedTodo = (titleToUpdate: string) => {
        const checkedList: TodoProps[] = todos.map((todo) => {
            if (todo.title === titleToUpdate) {
                const newStatus: Status =
                    todo.status === "unfinished" ? "finish" : "unfinished";

                return { ...todo, status: newStatus };
            }

            return todo;
        });

        setTodos(checkedList);
    };

    const filterTodos = todos.filter((todo) => {
        const matchSearch = todo.title
            .toLowerCase()
            .includes(searchQuery.toLowerCase());
        const matchTag =
            !tagFilter || tagFilter === "" || todo.tag === tagFilter;

        return matchSearch && matchTag;
    });

    /* eslint-disable @typescript-eslint/no-explicit-any */
    filterTodos.sort((a: any) => (a.status === "finish" ? 1 : -1));

    return (
        <div className="w-150 h-auto p-5 space-y-5 bg-bg-primary rounded-xl text-white">
            <section className="space-y-5">
                <h1 className="font-bold text-2xl">
                    TODO APP <span className="text-xs">with filter</span>
                </h1>

                <div>
                    <input
                        type="search"
                        placeholder="Search.."
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="px-2 py-1 w-60 border border-white rounded-lg outline-0"
                    />
                </div>

                <div className="flex gap-5">
                    <div>
                        <button
                            onClick={() => setIsModal(true)}
                            className="p-1.5 w-30 bg-action-button rounded-lg text-black font-bold"
                        >
                            Add
                        </button>
                        {isModal && (
                            <Modal
                                onClose={handleCloseModal}
                                data={{ setTitle, setContext, handleTagChange }}
                                onSubmit={handleSubmitTodo}
                                tag={tag}
                            />
                        )}
                    </div>
                    <div className="relative" ref={dropdownRef}>
                        <button
                            className={`flex items-center gap-1 p-1 w-30 font-semibold rounded-lg justify-between ${
                                tagFilter
                                    ? "bg-action-button text-black p-1.5"
                                    : "border-action-button text-action-button border-2"
                            }`}
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
                <TableTodo
                    todos={filterTodos}
                    delTodo={handleDeleteTodos}
                    handleCheckedTodo={handleCheckedTodo}
                />
            </section>
        </div>
    );
}

export default TodoApp;
