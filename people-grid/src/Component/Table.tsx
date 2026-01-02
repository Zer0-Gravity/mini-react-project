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
        <div className="flex flex-col gap-4">
            <table className="min-w-full table-auto rounded border border-gray-700 text-light-text">
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
                    {currentData.length ? (
                        currentData.map((employee) => (
                            <tr
                                key={employee.id}
                                className="border border-gray-600 hover:bg-accent-color"
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
                                        <span className="font-bold">
                                            {employee.name}
                                        </span>
                                        <span className="font-light">
                                            {employee.email}
                                        </span>
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
                        ))
                    ) : (
                        <h1 className="w-full">No Employee Found</h1>
                    )}
                </tbody>
            </table>

            <div className="flex gap-4 justify-end items-center">
                <button
                    disabled={currentPage === 1}
                    onClick={() => handleNavButton(currentPage - 1)}
                    className="p-2 bg-accent-color rounded-lg font-semibold disabled:opacity-60"
                >
                    Previous
                </button>
                <p className="text-light-text">
                    Page {currentPage} of {totalPage}
                </p>
                <button
                    disabled={currentPage === totalPage}
                    onClick={() => handleNavButton(currentPage + 1)}
                    className="p-2 bg-accent-color rounded-lg font-semibold disabled:opacity-60"
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default Table;
