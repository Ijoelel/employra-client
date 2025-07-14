import {
    useEffect,
    useState,
    type ChangeEventHandler,
    type FormEvent,
} from "react";
import type { EmployeeData } from "../../type";

interface EmployeeModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (data: EmployeeData) => void;
    initialData: EmployeeData | null;
}

const EmployeeModal = ({
    isOpen,
    onClose,
    onSubmit,
    initialData = null,
}: EmployeeModalProps) => {
    const isEdit = !!initialData;

    const [formData, setFormData] = useState<EmployeeData>({
        name: "",
        division: "",
        position: "",
        age: 0,
        phone: "",
        image: "",
    });

    useEffect(() => {
        if (initialData) {
            setFormData({ ...initialData });
        }
    }, [initialData]);

    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        e.preventDefault();
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSave = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (Object.values(formData).some((v) => !v)) {
            alert("Please fill in all fields.");
            return;
        }

        onSubmit(formData);
        onClose();
        setFormData({
            name: "",
            division: "",
            position: "",
            age: 0,
            phone: "",
            image: "",
        });
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
            <div className="bg-white dark:bg-zinc-900 w-full max-w-lg rounded-2xl shadow-lg p-6 relative">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                    {isEdit ? "Edit Employee" : "Add New Employee"}
                </h2>

                <div className="space-y-4">
                    {[
                        "name",
                        "division",
                        "position",
                        "age",
                        "phone",
                        "image",
                    ].map((field) => (
                        <div key={field}>
                            <label className="block text-sm font-medium text-gray-700 dark:text-white capitalize">
                                {field}
                            </label>
                            <input
                                type={field === "age" ? "number" : "text"}
                                name={field}
                                value={formData[field]}
                                onChange={handleChange}
                                className="mt-1 block w-full px-4 py-2 bg-white dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 rounded-xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 dark:text-white"
                            />
                        </div>
                    ))}
                </div>

                <div className="mt-6 flex justify-end space-x-2">
                    <button
                        onClick={onClose}
                        type="button"
                        className="px-4 py-2 rounded-xl bg-gray-200 dark:bg-zinc-700 text-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-zinc-600"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSave}
                        type="button"
                        className="px-4 py-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700"
                    >
                        {isEdit ? "Update" : "Add"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EmployeeModal;
