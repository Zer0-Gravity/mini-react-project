import { HiDotsCircleHorizontal } from "react-icons/hi";
import type { PeopleProps } from "../Utils/Type";
import { useState } from "react";

function Table({ filteredData }: { filteredData: PeopleProps[] }) {
    const [currentPage, setCurrentPage] = useState(1);

    const itemPerPage = 10;
    const startIndex = (currentPage - 1) * itemPerPage;
    const currentData = filteredData.slice(
        startIndex,
        startIndex + itemPerPage
    );

    const totalPage = Math.ceil(filteredData.length / itemPerPage);
    const handleNavButton = (page: number) => setCurrentPage(page);

    return (
        <div className="flex flex-col">
            <table className="min-w-full table-auto rounded border border-gray-700 ">
                <thead>
                    <tr>
                        <th className="px-5 py-2 text-left w-10">ID</th>
                        <th className="px-5 py-2 text-left w-15">Profile</th>
                        <th className="px-5 py-2 text-left">Name</th>
                        <th className="px-5 py-2 text-left">Role</th>
                        <th className="px-5 py-2 text-left">Status</th>
                        <th className="px-5 py-2 text-left">Action</th>
                    </tr>
                </thead>

                <tbody>
                    {currentData.map((employee) => (
                        <tr
                            key={employee.id}
                            className="border border-gray-600"
                        >
                            <td className="px-4 py-2">{employee.id}</td>
                            <td className="px-4 py-2">
                                <img
                                    src={employee.profileImage}
                                    alt={employee.name}
                                    className="rounded-full aspect-square w-12.5"
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
                <button onClick={() => handleNavButton(currentPage - 1)}>
                    Previous
                </button>
                <p>
                    Page {currentPage} of {totalPage}
                </p>
                <button onClick={() => handleNavButton(currentPage + 1)}>
                    Next
                </button>
            </div>
        </div>
    );
}

export default Table;
