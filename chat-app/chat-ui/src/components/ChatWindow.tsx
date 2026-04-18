import { Hash, Paperclip, Send, User, XCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { NavLink, useParams } from "react-router";
import { useRoom, useUserData } from "../store";
import type { MessagesObj } from "../type";

import Linkify from "linkify-react";
import { socket } from "../socket";

function ChatWindow() {
    const [textMessage, setTextMessage] = useState<string>("");
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    const { roomList, addMessages } = useRoom(); //Grab the array room from the zustand store
    const { userData } = useUserData(); //Grab the user data from zustand store

    //Get the room id
    const { roomId } = useParams();
    //Find correct room data by comparing the id
    const currentRoom = roomList.find((r) => r.roomId === roomId);
    //If currentRoom exist take the messages object and put in variable
    const chatLog = currentRoom ? currentRoom.messages : null;

    const sendMessages = () => {
        const newMessage: MessagesObj = {
            authorId: userData.id,
            author: userData.name,
            message: textMessage,
            time: "14:00",
        };

        if (!textMessage.trim()) return;

        addMessages(newMessage, roomId);
        //send the message to server
        socket.emit("send_message", { newMessage, roomId });
        setTextMessage("");
    };

    const enterKey = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter") {
            //Immediately send message when user press enter
            if (!e.shiftKey) {
                //Prevent new line for being added and send the message
                e.preventDefault();
                sendMessages();
            }
        }
    };

    const option = {
        className:
            "'text-blue-600 hover:text-blue-800 underline decoration-2 transition-colors'",
    };
    useEffect(() => {
        //Join room as soon as user enter the chat
        if (roomId) {
            socket.emit("join_room", roomId);
        }
    }, [roomId, addMessages]);

    useEffect(() => {
        if (textAreaRef.current) {
            //Set the start of the height as auto
            textAreaRef.current.style.height = `auto`;
            //set the height following the user input
            textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
        }
    });

    return (
        <main className="bg-main-chat w-full h-full p-5 flex flex-col gap-5">
            <header className="flex justify-between text-primary-text shadow-8xl">
                <div className="flex gap-2">
                    <Hash />
                    <h1 className="font-semibold ">
                        {currentRoom?.roomName}/
                        <span className="font-light text-gray-400 text-[14px]">
                            {currentRoom?.roomId}
                        </span>
                    </h1>
                </div>
                <NavLink to={"/"}>
                    <XCircle />
                </NavLink>
            </header>

            <section className="flex-1 flex flex-col-reverse gap-3 overflow-y-auto hide-scrollbar ">
                {!chatLog ? (
                    <div></div>
                ) : (
                    //Put the new message on the bottom
                    [...chatLog].reverse().map((msg, i) => (
                        <div
                            key={i}
                            className={`flex gap-2 ${msg.authorId === userData.id ? "justify-end" : "justify-start"}`}
                        >
                            <div
                                className={`bg-gray-400 p-2 rounded-full w-7.5 h-7.5 ${msg.authorId === userData.id ? "hidden" : "block"}`}
                            >
                                <User size={15} />
                            </div>
                            <div className="space-y-2">
                                <div
                                    className={`${msg.authorId === userData.id ? "bg-sender" : "bg-receiver"} text-primary-text p-3.75 rounded-lg max-w-200 space-y-2 min-w-20`}
                                >
                                    <p
                                        className={`font-semibold text-[12px] text-gray-500 ${msg.authorId === userData.id ? "hidden" : "block"}`}
                                    >
                                        {msg.author}
                                    </p>
                                    <p
                                        className={`${msg.authorId === userData.id ? "text-sender-text" : "text-receiver-text"} text-[14px] whitespace-pre-wrap`}
                                    >
                                        <Linkify options={option}>
                                            {msg.message}
                                        </Linkify>
                                    </p>
                                </div>
                                <p
                                    className={`text-[10px] text-gray-400 flex ${msg.authorId === userData.id ? "justify-end" : "justify-start"}`}
                                >
                                    {msg.time}
                                </p>
                            </div>
                        </div>
                    ))
                )}
            </section>

            <section className="bg-message-input w-full flex p-2 rounded-lg items-end">
                <textarea
                    ref={textAreaRef}
                    placeholder="Type a message"
                    value={textMessage}
                    onChange={(e) => setTextMessage(e.target.value)}
                    className="w-full flex-1 outline-none p-2 resize-none bg-transparent min-h-10 text-primary-text"
                    rows={1}
                    onKeyDown={enterKey}
                />
                <div className="flex gap-2 items-center h-10 ">
                    <Paperclip size={18} className="text-primary-text" />
                    <button
                        className="bg-accent rounded-full w-10 h-10 flex items-center justify-center"
                        onClick={sendMessages}
                    >
                        <Send size={20} />
                    </button>
                </div>
            </section>
        </main>
    );
}

export default ChatWindow;
