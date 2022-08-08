import express, { Express, Request, Response } from 'express';
import { Server } from 'socket.io'
import http from 'http'
import bodyParser from "body-parser";
import dotenv from 'dotenv';

import {userController} from './src/controllers/userController'

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000"
    }
});

io.on("connection", (socket) => {
    console.log("user connected")
})

app.use(bodyParser.json())

app.use("/user", userController)

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

server.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});