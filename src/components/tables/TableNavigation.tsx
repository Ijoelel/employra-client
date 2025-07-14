import { useSearchParams } from "react-router";

interface TableNavigationProps {
    total: number;
}

const TableNavigation = ({ total }: TableNavigationProps) => {
    const [searchParams, setSearchParams] = useSearchParams();

    const currentPage = Number(searchParams.get("page") || "1");
    const totalPages = Math.ceil(total / 7);

    const changePage = (page: number) => {
        if (page < 1 || page > totalPages) return;

        const newParams = new URLSearchParams(searchParams);
        newParams.set("page", page.toString());

        setSearchParams(newParams);
    };

    return (
        <div className="px-6 py-4">
            <div className="flex items-center justify-between">
                <button
                    type="button"
                    onClick={() => changePage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="inline-flex items-center justify-center gap-2 rounded-lg transition px-4 py-3 text-sm bg-white text-gray-700 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-400 dark:ring-gray-700 dark:hover:bg-white/[0.03] dark:hover:text-gray-300 disabled:cursor-not-allowed cursor-pointer disabled:opacity-50"
                >
                    <svg
                        className="fill-current"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M2.583 10a.75.75 0 0 1 .22-.53l4.997-5a.75.75 0 0 1 1.061 1.06L5.14 9.25h11.527a.75.75 0 0 1 0 1.5H5.14l3.72 3.72a.75.75 0 1 1-1.061 1.06l-4.997-5A.75.75 0 0 1 2.583 10Z"
                            fill=""
                        />
                    </svg>
                    <span className="hidden sm:inline">Previous</span>
                </button>

                <span className="block text-sm font-medium text-gray-700 dark:text-gray-400 sm:hidden">
                    Page {currentPage} of {totalPages}
                </span>

                <ul className="hidden sm:flex items-center gap-1">
                    {Array.from({ length: 5 }, (_, i) => {
                        let startPage = 1;

                        if (currentPage > 4 && currentPage <= totalPages - 2) {
                            startPage = currentPage - 2;
                        } else if (currentPage > totalPages - 2) {
                            startPage = totalPages - 4;
                        }

                        const page = startPage + i;
                        if (page < 1 || page > totalPages) return null;

                        const isActive = currentPage === page;

                        return (
                            <li key={page}>
                                <button
                                    type="button"
                                    onClick={() => changePage(page)}
                                    className={`h-10 w-10 flex items-center justify-center rounded-lg text-sm font-medium transition cursor-pointer ${
                                        isActive
                                            ? "bg-blue-500 text-white"
                                            : "text-gray-700 hover:text-blue-500 hover:bg-blue-500/[0.08] dark:text-gray-400 dark:hover:text-white dark:hover:bg-blue-500"
                                    }`}
                                >
                                    {page}
                                </button>
                            </li>
                        );
                    })}
                </ul>

                <button
                    type="button"
                    onClick={() => changePage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="inline-flex items-center justify-center gap-2 rounded-lg transition px-4 py-3 text-sm bg-white text-gray-700 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-400 dark:ring-gray-700 dark:hover:bg-white/[0.03] dark:hover:text-gray-300 disabled:cursor-not-allowed cursor-pointer disabled:opacity-50"
                >
                    <span className="hidden sm:inline">Next</span>
                    <svg
                        className="fill-current"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M17.417 10a.75.75 0 0 0-.22-.53l-4.997-5a.75.75 0 1 0-1.061 1.06l3.72 3.72H3.333a.75.75 0 0 0 0 1.5h11.526l-3.72 3.72a.75.75 0 1 0 1.061 1.06l4.997-5a.75.75 0 0 0 .22-.53Z"
                            fill=""
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default TableNavigation;
