import express from 'express';
import { Query, Send } from 'express-serve-static-core';
import {createUser, User} from "../models/User";
import { v4 as uuidv4 } from 'uuid';

const userController = express.Router();

export interface TypedRequest<T extends Query, U> extends Express.Request {
    body: U,
    query: T
}

export interface TypedResponse<ResBody> extends Express.Response {
    json: Send<ResBody, this>;
}

userController.post('/add', (req: TypedRequest<{ name: string }, any>, res: TypedResponse<User>) => {
    const { name } = req.body;
    const user = createUser({ id: uuidv4(), name });
    res.json(user)
})

export { userController }
