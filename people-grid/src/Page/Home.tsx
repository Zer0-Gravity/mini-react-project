import Table from "../Component/Table";
import type { PeopleProps } from "../Utils/Type";

function Home({ people }: { people: PeopleProps[] }) {
    return (
        <div className="ml-35">
            <div className="flex">
                <div className="flex-1">
                    <input type="search" placeholder="Search employee.." />
                </div>
                <div className="flex gap-5">
                    <label>
                        <input type="radio" name="filter-group" />
                        <span>Manager</span>
                    </label>
                    <label>
                        <input type="radio" name="filter-group" />
                        <span>Admin</span>
                    </label>
                    <label>
                        <input type="radio" name="filter-group" />
                        <span>Editor</span>
                    </label>
                    <label>
                        <input type="radio" name="filter-group" />
                        <span>User</span>
                    </label>
                </div>
                <div>
                    <button>Add Employee</button>
                </div>
            </div>

            <Table people={people} />
        </div>
    );
}

export default Home;
