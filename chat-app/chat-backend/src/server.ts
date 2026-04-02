import type { Application } from "express";
import express from "express";
import { Server } from "socket.io";
import http from "http";
import cors from "cors";

const app: Application = express();
const PORT = process.env.PORT || 3500;
const server = http.createServer(app);

const io = new Server(server, {
    cors: { origin: "http://localhost:5173" },
});

app.use(cors);

io.on("connection", (socket) => {
    console.log(`User Connected : ${socket.id}`);

    socket.on("send message", (data) => {
        io.emit("receive message", data);
    });

    socket.on("disconnected", () => {
        console.log(`User disconnected : ${socket.id}`);
    });
});

app.listen(PORT, () => console.log(`Server run in port ${PORT}`));
