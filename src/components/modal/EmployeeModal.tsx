import {
    useEffect,
    useState,
    type ChangeEventHandler,
    type FormEvent,
} from "react";
import type { EmployeeData } from "../../type";
import Input from "../form/Input";
import Label from "../form/Label";
import { createData, updateData } from "../../utils/db";

interface EmployeeModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit?: (data: EmployeeData) => void;
    initialData: EmployeeData | null;
    setEmployees: React.Dispatch<React.SetStateAction<EmployeeData[]>>;
}

const EmployeeModal = ({
    isOpen,
    onClose,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onSubmit,
    initialData = null,
    setEmployees,
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
        console.log(e.target.value);
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSave = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (Object.values(formData).some((v) => !v)) {
            alert("Please fill in all fields.");
            return;
        }

        setEmployees(
            updateData("employees", initialData?.id as string, formData)
        );

        if (!initialData) {
            setEmployees(createData("employees", formData));
        } else {
            setEmployees(
                updateData("employees", initialData?.id as string, formData)
            );
        }

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
            <div className="bg-white dark:bg-zinc-900 w-full max-w-lg rounded-lg shadow-lg p-6 relative">
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
                            <Label className="block text-sm font-medium text-gray-700 dark:text-white capitalize">
                                {field}
                            </Label>
                            <Input
                                type={
                                    field === "age"
                                        ? "number"
                                        : field === "image"
                                        ? "file"
                                        : "text"
                                }
                                name={field}
                                value={formData[field]}
                                placeholder={field}
                                onChange={handleChange}
                                className="mt-1 block w-full px-4 py-2 bg-white dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-900 dark:text-white placeholder:capitalize file:h-11 file:-mt-2.5 file:-ml-4 file:px-2 file:bg-blue-500"
                            />
                        </div>
                    ))}
                </div>

                <div className="mt-6 flex justify-end space-x-2">
                    <button
                        onClick={onClose}
                        type="button"
                        className="px-4 py-2 rounded-md bg-gray-200 dark:bg-zinc-700 text-gray-700 cursor-pointer dark:text-white hover:bg-gray-300 dark:hover:bg-zinc-600"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSave}
                        type="button"
                        className="px-4 py-2 rounded-md bg-blue-600 text-white cursor-pointer hover:bg-blue-700"
                    >
                        {isEdit ? "Update" : "Add"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EmployeeModal;
