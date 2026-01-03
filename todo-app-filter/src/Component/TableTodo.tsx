import { FaRegCheckSquare, FaTrash } from "react-icons/fa";

interface TableProps {
    todos: TodoProps[];
}

interface TodoProps {
    title: string;
    status: string;
    context: string;
}

function TableTodo({ todos }: TableProps) {
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
                    {todos.map((todo) => (
                        <tr className="has-checked:opacity-40 ">
                            <td>
                                <input type="checkbox" id={todo.title} />
                            </td>
                            <td>
                                <label htmlFor={todo.title}>
                                    <span className="has-checked:line-through">
                                        {todo.title}
                                    </span>
                                </label>    
                            </td>
                            <td>{todo.status}</td>
                            <td>{todo.context}</td>
                            <td>
                                <FaTrash />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TableTodo;
