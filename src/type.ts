export type UserDB = {
    id: string;
    firstname: string;
    lastname: string;
    address: string;
    username: string;
    phone: string;
    email: string;
    password: string;
};

export type User = {
    id: string;
    firstname: string;
    lastname: string;
    address: string;
    username: string;
    phone: string;
    email: string;
};

export type LoginRequest = {
    username: string;
    password: string;
};

export type LoginResponse = {
    status: string;
    message: string;
    data?: {
        token: string;
        admin: User;
    };
};

export type LogoutResponse = {
    status: string;
    message: string;
};

export type EmployeeData = {
    id?: string;
    name: string;
    division: string;
    position: string;
    age: number;
    phone: string;
    image?: string;
    [key: string]: string | number | undefined;
};

export type DivisionData = {
    id: string;
    name: string;
};
