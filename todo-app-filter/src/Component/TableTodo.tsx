import { FaRegCheckSquare, FaTrash } from "react-icons/fa";

interface TableProps {
    todos: TodoProps[];
    delTodo: (index: number) => void;
    handleCheckedTodo: (titleToUpdate: string) => void;
}

interface TodoProps {
    id: string;
    title: string;
    context: string;
    tag: string;
    status: Status;
}

type Status = "finish" | "unfinished";

function TableTodo({ todos, delTodo, handleCheckedTodo }: TableProps) {
    return (
        <div className="h-120 overflow-y-auto table-container">
            <table className="min-w-full">
                <thead>
                    <tr>
                        <th className=" py-2 px-5 sticky top-0 bg-active rounded-l-lg">
                            <FaRegCheckSquare />
                        </th>
                        <th className="text-left py-2 px-5 sticky top-0 bg-active">
                            Task
                        </th>
                        <th className="text-left py-2 px-5 sticky top-0 bg-active">
                            Status
                        </th>
                        <th className="text-left py-2 px-5 sticky top-0 bg-active">
                            Context
                        </th>
                        <th className="text-left py-2 px-5 sticky top-0 bg-active rounded-r-lg">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody className="max-h-400">
                    {todos.length !== 0 ? (
                        todos.map((todo) => (
                            <tr
                                key={todo.id}
                                className="has-checked:opacity-40 "
                            >
                                <td className="py-2 px-5">
                                    <input
                                        type="checkbox"
                                        id={todo.title}
                                        checked={todo.status === "finish"}
                                        onChange={() =>
                                            handleCheckedTodo(todo.title)
                                        }
                                    />
                                </td>
                                <td className="py-2 px-5">
                                    <label htmlFor={todo.title}>
                                        <span className="has-checked:line-through">
                                            {todo.title}
                                        </span>
                                    </label>
                                </td>
                                <td className="py-2 px-5">{todo.tag}</td>
                                <td className="py-2 px-5">{todo.context}</td>
                                <td className="py-2 px-5">
                                    <button onClick={() => delTodo(todo.id)}>
                                        <FaTrash color="#F52F57" />
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <h1 className="font-bold text-center py-2 px-5">
                            No Todos Found
                        </h1>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default TableTodo;
