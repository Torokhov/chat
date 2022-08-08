export interface User {
    id: string;
    name: string;
}

export const createUser = (model: Partial<User>): User => ({
    id: "",
    name: "",
    ...model
})
