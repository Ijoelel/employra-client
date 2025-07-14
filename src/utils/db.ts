import type { EmployeeData } from "../type";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const DBInit = () => {
    if (!localStorage.getItem("users")) {
        localStorage.setItem(
            "users",
            JSON.stringify([
                {
                    id: "1",
                    firstname: "Afrizal",
                    lastname: "Luthfi",
                    address: "Surabaya, Indonesia",
                    username: "admin",
                    phone: "0987654321",
                    password: "12345678",
                    email: "admin@example.com",
                },
            ])
        );
        localStorage.setItem("divisions", JSON.stringify([]));
        localStorage.setItem(
            "employees",
            JSON.stringify([
                {
                    id: 1,
                    name: "Ahmad Surya",
                    division: "Management",
                    position: "Owner",
                    age: 45,
                    phone: "081234567890",
                    image: "owner.jpg",
                },
                {
                    id: 2,
                    name: "Rina Kartika",
                    division: "Finance",
                    position: "Accountant",
                    age: 32,
                    phone: "081234567891",
                    image: "user-01.jpg",
                },
                {
                    id: 3,
                    name: "Budi Santoso",
                    division: "IT",
                    position: "Backend Developer",
                    age: 28,
                    phone: "081234567892",
                    image: "user-02.jpg",
                },
                {
                    id: 4,
                    name: "Siti Marlina",
                    division: "IT",
                    position: "Frontend Developer",
                    age: 26,
                    phone: "081234567893",
                    image: "user-03.jpg",
                },
                {
                    id: 5,
                    name: "Dedi Irawan",
                    division: "HR",
                    position: "HR Officer",
                    age: 35,
                    phone: "081234567894",
                    image: "user-04.jpg",
                },
                {
                    id: 6,
                    name: "Indah Permata",
                    division: "Marketing",
                    position: "Content Strategist",
                    age: 30,
                    phone: "081234567895",
                    image: "user-05.jpg",
                },
                {
                    id: 7,
                    name: "Fajar Nugroho",
                    division: "IT",
                    position: "DevOps Engineer",
                    age: 33,
                    phone: "081234567896",
                    image: "user-06.jpg",
                },
                {
                    id: 8,
                    name: "Tari Ayu",
                    division: "Design",
                    position: "UI/UX Designer",
                    age: 27,
                    phone: "081234567897",
                    image: "user-07.jpg",
                },
                {
                    id: 9,
                    name: "Yusuf Ramadhan",
                    division: "IT",
                    position: "Mobile Developer",
                    age: 29,
                    phone: "081234567898",
                    image: "user-08.jpg",
                },
                {
                    id: 10,
                    name: "Nina Zahra",
                    division: "Customer Service",
                    position: "Support Officer",
                    age: 24,
                    phone: "081234567899",
                    image: "user-09.jpg",
                },
                {
                    id: 11,
                    name: "Andi Wijaya",
                    division: "Logistics",
                    position: "Warehouse Supervisor",
                    age: 38,
                    phone: "081234567800",
                    image: "user-10.jpg",
                },
                {
                    id: 12,
                    name: "Putri Damayanti",
                    division: "Finance",
                    position: "Cashier",
                    age: 31,
                    phone: "081234567801",
                    image: "user-11.jpg",
                },
                {
                    id: 13,
                    name: "Arif Hidayat",
                    division: "IT",
                    position: "System Analyst",
                    age: 34,
                    phone: "081234567802",
                    image: "user-12.jpg",
                },
                {
                    id: 14,
                    name: "Maya Lestari",
                    division: "Design",
                    position: "Graphic Designer",
                    age: 25,
                    phone: "081234567803",
                    image: "user-13.jpg",
                },
                {
                    id: 15,
                    name: "Bayu Prasetya",
                    division: "Marketing",
                    position: "Digital Marketer",
                    age: 29,
                    phone: "081234567804",
                    image: "user-14.jpg",
                },
                {
                    id: 16,
                    name: "Rizka Amelia",
                    division: "HR",
                    position: "Recruiter",
                    age: 28,
                    phone: "081234567805",
                    image: "user-15.jpg",
                },
                {
                    id: 17,
                    name: "Ilham Kurniawan",
                    division: "IT",
                    position: "Full Stack Developer",
                    age: 30,
                    phone: "081234567806",
                    image: "user-16.jpg",
                },
                {
                    id: 18,
                    name: "Dian Safitri",
                    division: "Finance",
                    position: "Finance Analyst",
                    age: 33,
                    phone: "081234567807",
                    image: "user-17.jpg",
                },
                {
                    id: 19,
                    name: "Agus Supriyadi",
                    division: "Operations",
                    position: "Field Officer",
                    age: 36,
                    phone: "081234567808",
                    image: "user-18.jpg",
                },
                {
                    id: 20,
                    name: "Vina Ardelia",
                    division: "HR",
                    position: "Training Officer",
                    age: 29,
                    phone: "081234567809",
                    image: "user-19.jpg",
                },
                {
                    id: 21,
                    name: "Rahmat Hidayat",
                    division: "Security",
                    position: "Security Staff",
                    age: 40,
                    phone: "081234567810",
                    image: "user-20.jpg",
                },
                {
                    id: 22,
                    name: "Ayu Pratiwi",
                    division: "Legal",
                    position: "Legal Advisor",
                    age: 37,
                    phone: "081234567811",
                    image: "user-21.jpg",
                },
                {
                    id: 23,
                    name: "Reza Anugrah",
                    division: "IT",
                    position: "QA Engineer",
                    age: 27,
                    phone: "081234567812",
                    image: "user-22.jpg",
                },
                {
                    id: 24,
                    name: "Citra Handayani",
                    division: "Design",
                    position: "Illustrator",
                    age: 26,
                    phone: "081234567813",
                    image: "user-23.jpg",
                },
                {
                    id: 25,
                    name: "Taufik Iskandar",
                    division: "R&D",
                    position: "Product Researcher",
                    age: 31,
                    phone: "081234567814",
                    image: "user-24.jpg",
                },
                {
                    id: 26,
                    name: "Mega Ayuningtyas",
                    division: "Customer Service",
                    position: "Call Center",
                    age: 25,
                    phone: "081234567815",
                    image: "user-25.jpg",
                },
                {
                    id: 27,
                    name: "Denny Prakoso",
                    division: "IT",
                    position: "IT Support",
                    age: 32,
                    phone: "081234567816",
                    image: "user-26.jpg",
                },
                {
                    id: 28,
                    name: "Ratih Febriana",
                    division: "Finance",
                    position: "Budget Officer",
                    age: 34,
                    phone: "081234567817",
                    image: "user-27.jpg",
                },
                {
                    id: 29,
                    name: "Fikri Alamsyah",
                    division: "IT",
                    position: "Data Engineer",
                    age: 28,
                    phone: "081234567818",
                    image: "user-28.jpg",
                },
                {
                    id: 30,
                    name: "Salsa Maulida",
                    division: "Marketing",
                    position: "SEO Specialist",
                    age: 30,
                    phone: "081234567819",
                    image: "user-29.jpg",
                },
                {
                    id: 31,
                    name: "Eko Julianto",
                    division: "Operations",
                    position: "Supervisor",
                    age: 39,
                    phone: "081234567820",
                    image: "user-30.jpg",
                },
                {
                    id: 32,
                    name: "Anisa Fitriani",
                    division: "HR",
                    position: "Compensation Analyst",
                    age: 33,
                    phone: "081234567821",
                    image: "user-31.jpg",
                },
                {
                    id: 33,
                    name: "Rizal Akbar",
                    division: "Legal",
                    position: "Legal Staff",
                    age: 35,
                    phone: "081234567822",
                    image: "user-32.jpg",
                },
                {
                    id: 34,
                    name: "Linda Puspita",
                    division: "Customer Service",
                    position: "Helpdesk",
                    age: 29,
                    phone: "081234567823",
                    image: "user-33.jpg",
                },
                {
                    id: 35,
                    name: "Gilang Mahesa",
                    division: "IT",
                    position: "Network Administrator",
                    age: 31,
                    phone: "081234567824",
                    image: "user-34.jpg",
                },
                {
                    id: 36,
                    name: "Yuni Safira",
                    division: "Finance",
                    position: "Auditor",
                    age: 36,
                    phone: "081234567825",
                    image: "user-35.jpg",
                },
                {
                    id: 37,
                    name: "Aditya Wirawan",
                    division: "Design",
                    position: "Animator",
                    age: 27,
                    phone: "081234567826",
                    image: "user-36.jpg",
                },
                {
                    id: 38,
                    name: "Desi Anggraini",
                    division: "Marketing",
                    position: "PR Officer",
                    age: 28,
                    phone: "081234567827",
                    image: "user-37.jpg",
                },
            ])
        );

        localStorage.setItem("session", JSON.stringify({}));
    }
};

export const readData = (key: string) => {
    return JSON.parse(localStorage.getItem(key) || "");
};

export const createData = (key: string, data: any) => {
    const existingData = readData(key);
    localStorage.setItem(key, JSON.stringify([...existingData, data]));
    return [...existingData, data];
};

export const updateData = (key: string, id: string, data: any) => {
    const existingData = readData(key);
    if (Array.isArray(existingData)) {
        const index = existingData.findIndex((item) => item.id === id);
        if (index !== -1) {
            existingData[index] = data;
        }
    }
    localStorage.setItem(key, JSON.stringify(existingData));

    return existingData;
};

export const deleteData = (key: string, id: string) => {
    const existingData = readData(key);

    const index = existingData.findIndex(
        (item: EmployeeData) => item.id === id
    );
    existingData.splice(index, 1);
    localStorage.setItem(key, JSON.stringify(existingData));
    return existingData;
};
