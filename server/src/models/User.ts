export interface User {
   userId: string;
   name: string;
}

export const createUser = (model: Partial<User>): User => ({
   userId: '',
   name: '',
   ...model,
});
