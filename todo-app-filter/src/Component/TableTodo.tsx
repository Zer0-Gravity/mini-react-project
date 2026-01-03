import { FaRegCheckSquare, FaTrash } from "react-icons/fa";

interface TableProps {
    todos: TodoProps[];
    delTodo: (index: number) => void;
    handleCheckedTodo: (titleToUpdate: string) => void;
}

interface TodoProps {
    title: string;
    context: string;
    tag: string;
    status: Status;
}

type Status = "finish" | "unfinished";

function TableTodo({ todos, delTodo, handleCheckedTodo }: TableProps) {
    return (
        <div>
            <table className="min-w-full">
                <thead>
                    <tr>
                        <th>
                            <FaRegCheckSquare />
                        </th>
                        <th>Task</th>
                        <th>Status</th>
                        <th>Context</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.length !== 0 ? (
                        todos.map((todo, index) => (
                            <tr className="has-checked:opacity-40 ">
                                <td>
                                    <input
                                        type="checkbox"
                                        id={todo.title}
                                        checked={todo.status === "finish"}
                                        onChange={() =>
                                            handleCheckedTodo(todo.title)
                                        }
                                    />
                                </td>
                                <td>
                                    <label htmlFor={todo.title}>
                                        <span className="has-checked:line-through">
                                            {todo.title} + {todo.status}
                                        </span>
                                    </label>
                                </td>
                                <td>{todo.tag}</td>
                                <td>{todo.context}</td>
                                <td>
                                    <button onClick={() => delTodo(index)}>
                                        <FaTrash />
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <h1>No Todos Found</h1>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default TableTodo;
