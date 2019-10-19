export interface ICreateStudent {
    age: number;
    firstName: string;
    lastName: string;
}

export interface IStudent {
    id: number;
    age: number;
    createdOn: string;
    firstName: string;
    lastName: string;
    user: number;
    fullName?: string;
}
