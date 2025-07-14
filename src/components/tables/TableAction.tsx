interface TableActionProps {
    isOpen: boolean;
    index: number;
}

const TableAction = ({ isOpen, index }: TableActionProps) => {
    console.log("table action", index);
    return (
        <div
            className={`absolute right-1/2 ${
                index < 4 ? "top-1/2" : "bottom-2/3"
            } mt-2 z-10 w-40 p-2 rounded-2xl border border-gray-200 bg-white shadow-lg dark:border-gray-800 dark:bg-gray-900 ${
                isOpen ? "block" : "hidden"
            }`}
        >
            <div
                className="space-y-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
            >
                <button className="text-xs w-full text-left font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300 px-3 py-2 rounded-lg">
                    View More
                </button>
                <button className="text-xs w-full text-left font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300 px-3 py-2 rounded-lg">
                    Delete
                </button>
            </div>
        </div>
    );
};

export default TableAction;
