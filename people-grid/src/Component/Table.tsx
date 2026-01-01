import { HiDotsCircleHorizontal } from "react-icons/hi";
import type { PeopleProps } from "../Utils/Type";

function Table({ people }: { people: PeopleProps[] }) {
    return (
        <div className="flex flex-col">
            <table className="min-w-full table-auto rounded border border-gray-700 ">
                <thead>
                    <tr>
                        <th className="px-5 py-2 text-left">ID</th>
                        <th className="px-5 py-2 text-left">Profile</th>
                        <th className="px-5 py-2 text-left">Name</th>
                        <th className="px-5 py-2 text-left">Role</th>
                        <th className="px-5 py-2 text-left">Status</th>
                        <th className="px-5 py-2 text-left">Action</th>
                    </tr>
                </thead>

                <tbody>
                    {people.map((employee) => (
                        <tr
                            key={employee.id}
                            className="border border-gray-600"
                        >
                            <td className="px-4 py-2">{employee.id}</td>
                            <td className="px-4 py-2">
                                <img
                                    src="https://placehold.co/50x50"
                                    alt="john-doe"
                                    className="rounded-full"
                                />
                            </td>
                            <td className="px-4 py-2">
                                <div className="flex flex-col">
                                    <span>{employee.name}</span>
                                    <span>{employee.email}</span>
                                </div>
                            </td>
                            <td className="px-4 py-2">{employee.role}</td>
                            <td className="px-4 py-2">{employee.status}</td>
                            <td className="px-4 py-2">
                                <button>
                                    <HiDotsCircleHorizontal size={25} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="flex gap-4 justify-end">
                <button>Previous</button>
                <p>Page 1 of 2</p>
                <button>Next</button>
            </div>
        </div>
    );
}

export default Table;
