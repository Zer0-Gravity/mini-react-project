import { HiDotsCircleHorizontal } from "react-icons/hi";

function Table() {
    return (
        <div>
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
                    <tr className="border border-gray-600">
                        <td className="px-4 py-2">90</td>
                        <td className="px-4 py-2">
                            <img
                                src="https://placehold.co/50x50"
                                alt="john-doe"
                                className="rounded-full"
                            />
                        </td>
                        <td className="px-4 py-2">
                            <div className="flex flex-col">
                                <span>John Doe</span>
                                <span>Johndoe@email.com</span>
                            </div>
                        </td>
                        <td className="px-4 py-2">Admin</td>
                        <td className="px-4 py-2">Active</td>
                        <td className="px-4 py-2">
                            <button>
                                <HiDotsCircleHorizontal size={25} />
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Table;
