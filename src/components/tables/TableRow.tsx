import { useEffect, useState } from "react";
import type { DivisionData, EmployeeData } from "../../type";
import TableAction from "./TableAction";

interface TableRowProps {
    index: number;
    rowData: DivisionData | EmployeeData;
    type: "division" | "employee";
}

const TableRow = ({ index, rowData, type }: TableRowProps) => {
    const [showActions, setShowActions] = useState(false);

    const toggleAction = () => {
        const shouldOpen = !showActions;
        window.dispatchEvent(new CustomEvent("close-all-actions")); // close others
        setShowActions(shouldOpen);
    };

    useEffect(() => {
        const handleClose = () => setShowActions(false);
        window.addEventListener("close-all-actions", handleClose);
        return () =>
            window.removeEventListener("close-all-actions", handleClose);
    }, []);

    if (type === "employee") {
        const data = rowData as EmployeeData;
        return (
            <tr key={index}>
                <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                        <img
                            className="w-8 h-8 rounded-full"
                            src={`./image/user/${data.image}`}
                            alt="brand"
                        />
                        <span className="font-medium text-theme-sm text-gray-700 dark:text-gray-400">
                            {data.name}
                        </span>
                    </div>
                </td>
                <td className="px-4 py-4 text-theme-sm text-gray-700 dark:text-gray-400 whitespace-nowrap">
                    {data.division}
                </td>
                <td className="px-4 py-4 text-theme-sm text-gray-700 dark:text-gray-400">
                    {data.position}
                </td>
                <td className="px-4 py-4 text-theme-sm text-gray-700 dark:text-gray-400">
                    {data.age}
                </td>
                <td className="px-4 py-4 text-theme-sm text-gray-700 dark:text-gray-400">
                    <span
                        className={`inline-flex items-center px-2.5 py-0.5 justify-center gap-1 rounded-full font-medium text-theme-xs`}
                    >
                        {data.phone}
                    </span>
                </td>
                <td className="px-4 py-4 text-theme-sm text-gray-700 dark:text-gray-400 relative">
                    <button
                        className="text-gray-500 dark:text-gray-400 cursor-pointer"
                        onClick={toggleAction}
                    >
                        <svg
                            className="fill-current"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M5.99902 10.245C6.96552 10.245 7.74902 11.0285 7.74902 11.995V12.005C7.74902 12.9715 6.96552 13.755 5.99902 13.755C5.03253 13.755 4.24902 12.9715 4.24902 12.005V11.995C4.24902 11.0285 5.03253 10.245 5.99902 10.245ZM17.999 10.245C18.9655 10.245 19.749 11.0285 19.749 11.995V12.005C19.749 12.9715 18.9655 13.755 17.999 13.755C17.0325 13.755 16.249 12.9715 16.249 12.005V11.995C16.249 11.0285 17.0325 10.245 17.999 10.245ZM13.749 11.995C13.749 11.0285 12.9655 10.245 11.999 10.245C11.0325 10.245 10.249 11.0285 10.249 11.995V12.005C10.249 12.9715 11.0325 13.755 11.999 13.755C12.9655 13.755 13.749 12.9715 13.749 12.005V11.995Z"
                                fill=""
                            />
                        </svg>
                    </button>
                    {showActions && (
                        <TableAction isOpen={showActions} index={index} />
                    )}
                </td>
            </tr>
        );
    } else {
        const data = rowData as DivisionData;
        return (
            <tr key={index}>
                <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                        <p className="font-medium text-theme-sm text-gray-700 dark:text-gray-400">
                            {data.name}
                        </p>
                    </div>
                </td>
            </tr>
        );
    }
};

export default TableRow;
