import express from "express";
import type { Application } from "express";
import { createServer } from "http";
import cors from "cors";
import { Server } from "socket.io";

const app: Application = express();
const PORT = process.env.PORT || 3500;
app.use(cors());

const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"],
    },
});

io.on("connection", (socket) => {
    console.log(`User connected with id: ${socket.id}`);

    //Let the user join to the room
    socket.on("join_room", (roomId) => {
        socket.join(roomId);
        console.log(`User join room ${roomId}`);
    });

    //Send the message to the client
    socket.on("send_message", (data) => {
        socket.to(data.roomId).emit("receive_message", data);
        console.log(data.newMessage);
    });

    //Listen if user send a typing signal
    socket.on("user_typing", (data) => {
        socket.to(data.roomId).emit("display_typing", data);
    });

    //Send the typing signal to other client
    socket.on("clear_typing", (data) => {
        socket.to(data.roomId).emit("stop_typing");
    });
});

server.listen(PORT, () => {
    console.log(`Server connected on port ${PORT}`);
});
