import { useEffect, useState } from "react";
import Button from "../../components/form/Button";
import TableRow from "../../components/tables/TableRow";
import { PlusIcon } from "../../icons";
import type { EmployeeData } from "../../type";
import { readData } from "../../utils/db";
import { paginate } from "../../utils/paginate";
import TableNavigation from "../../components/tables/TableNavigation";
import EmployeeModal from "../../components/modal/EmployeeModal";
import { useSearchParams } from "react-router";

const Employee = () => {
    const employeesDBData = readData("employees");

    // Query Parameter
    const [searchParams, setSearchParams] = useSearchParams();
    const pageIndex = Number(searchParams.get("page") || "1");

    const [employeesData, setEmployeesData] = useState(employeesDBData);
    const [employees, setEmployees] = useState<EmployeeData[]>(
        paginate(employeesData, pageIndex)
    );

    const [modalOpen, setModalOpen] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    useEffect(() => {
        setEmployees(paginate(employeesData, pageIndex));
    }, [employeesData, pageIndex]);

    const handleAddEmployee = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        setSelectedEmployee(null);
        setModalOpen(true);
    };

    const handleSubmit = (data: EmployeeData) => {
        let updatedEmployees;

        if (data.id) {
            // Edit
            updatedEmployees = employeesDBData.map((emp: EmployeeData) =>
                emp.id === data.id ? data : emp
            );
        } else {
            // Add
            const newEmployee = {
                ...data,
                id: employees.length + 1,
            };
            updatedEmployees = [...employeesDBData, newEmployee];
        }

        setEmployees(updatedEmployees);
        localStorage.setItem("employees", JSON.stringify(updatedEmployees));
    };

    useEffect(() => {
        const filtered_employees = employeesDBData.filter(
            (employee: EmployeeData) =>
                employee.name
                    .toLowerCase()
                    .includes(
                        searchParams.get("search")?.toLowerCase() || ""
                    ) ||
                employee.position
                    .toLowerCase()
                    .includes(
                        searchParams.get("search")?.toLowerCase() || ""
                    ) ||
                employee.division
                    .toLowerCase()
                    .includes(searchParams.get("search")?.toLowerCase() || "")
        );
        setEmployeesData(filtered_employees);
    }, [searchParams]);

    const handleSearchEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            e.preventDefault();
            setSearchParams({
                page: "1",
                search: e.currentTarget.value,
            });
        }
    };

    return (
        <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
            <div className="px-6 py-5">
                <h3 className="text-base font-medium text-gray-800 dark:text-white/90">
                    Employee List
                </h3>
            </div>
            <div className="p-4 border-t border-gray-100 dark:border-gray-800 sm:p-6">
                <div className="space-y-6">
                    <div className="rounded-2xl border border-gray-200 bg-white pt-4 dark:border-white/[0.05] dark:bg-white/[0.03]">
                        <div className="flex flex-col gap-2 px-5 mb-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
                                Employee
                            </h3>
                            <form className="flex gap-4">
                                <div className="relative">
                                    <button className="absolute -translate-y-1/2 left-4 top-1/2">
                                        <svg
                                            className="fill-gray-500 dark:fill-gray-400"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M3.04199 9.37381C3.04199 5.87712 5.87735 3.04218 9.37533 3.04218C12.8733 3.04218 15.7087 5.87712 15.7087 9.37381C15.7087 12.8705 12.8733 15.7055 9.37533 15.7055C5.87735 15.7055 3.04199 12.8705 3.04199 9.37381ZM9.37533 1.54218C5.04926 1.54218 1.54199 5.04835 1.54199 9.37381C1.54199 13.6993 5.04926 17.2055 9.37533 17.2055C11.2676 17.2055 13.0032 16.5346 14.3572 15.4178L17.1773 18.2381C17.4702 18.531 17.945 18.5311 18.2379 18.2382C18.5308 17.9453 18.5309 17.4704 18.238 17.1775L15.4182 14.3575C16.5367 13.0035 17.2087 11.2671 17.2087 9.37381C17.2087 5.04835 13.7014 1.54218 9.37533 1.54218Z"
                                                fill=""
                                            />
                                        </svg>
                                    </button>
                                    <input
                                        type="text"
                                        placeholder="Search..."
                                        defaultValue={
                                            searchParams.get("search") || ""
                                        }
                                        className="dark:bg-dark-900 h-[42px] w-full rounded-lg border border-gray-300 bg-transparent py-2.5 pl-[42px] pr-4 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 xl:w-[300px]"
                                        onKeyDown={handleSearchEnter}
                                    />
                                </div>
                                <Button
                                    className="h-10"
                                    onClick={() => handleAddEmployee}
                                >
                                    <PlusIcon />
                                    <span className="">Add Employee</span>
                                </Button>
                            </form>
                        </div>
                        <div className="overflow-x-auto px-5 sm:px-6">
                            <table className="min-w-full">
                                <thead className="border-y border-gray-100 dark:border-white/[0.05]">
                                    <tr>
                                        {[
                                            "Name",
                                            "Division",
                                            "Position",
                                            "Age",
                                            "Phone",
                                            "Action",
                                        ].map((title) => (
                                            <th
                                                key={title}
                                                className="px-4 py-3 font-normal text-start text-theme-sm text-gray-500 dark:text-gray-400"
                                            >
                                                {title === "Action" ? (
                                                    <span className="sr-only">
                                                        {title}
                                                    </span>
                                                ) : (
                                                    title
                                                )}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                                    {employees.map(
                                        (emp: EmployeeData, index: number) => (
                                            <TableRow
                                                rowData={emp}
                                                index={index}
                                                type="employee"
                                                key={index}
                                            />
                                        )
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <TableNavigation total={employeesData.length} />
            </div>
            <EmployeeModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                onSubmit={handleSubmit}
                initialData={selectedEmployee}
            />
        </div>
    );
};

export default Employee;
