import type { EmployeeData } from "../type";

export const paginate = (
    data: EmployeeData[],
    page = 1,
    pageSize = 7
): EmployeeData[] => {
    const start = (page - 1) * pageSize;
    return data.slice(start, start + pageSize);
};
