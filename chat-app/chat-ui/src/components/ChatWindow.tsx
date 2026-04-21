import { Hash, Paperclip, Send, XCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { NavLink, useParams } from "react-router";
import { useRoom, useUserData } from "../store";
import type { MessagesObj } from "../type";
import { socket } from "../socket";
import MessageBubble from "./MessageBubble";

function ChatWindow() {
    const [textMessage, setTextMessage] = useState<string>("");
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    const [typingStatus, setTypingStatus] = useState<string>("");
    const { roomList, addMessages } = useRoom(); //Grab the array room from the zustand store
    const { userData } = useUserData(); //Grab the user data from zustand store

    const typingTimeout = useRef<ReturnType<typeof setTimeout>>(null);

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
            time: new Date().toISOString(),
        };

        if (!textMessage.trim()) return;

        addMessages(newMessage, roomId);
        //send the message to server
        socket.emit("send_message", { newMessage, roomId });
        //Clear the textarea
        setTextMessage("");

        //Signal server to stop typing
        socket.emit("clear_typing", { roomId });

        //Clear the typing indicator
        setTypingStatus("");
    };

    const handleKeydown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter") {
            //Immediately send message when user press enter
            if (!e.shiftKey) {
                //Prevent new line for being added and send the message
                e.preventDefault();
                sendMessages();
            }
        }

        //Check if user currently typing
        if (e.key.length === 1 || e.key === "Backspace") {
            //Send the data to the server
            socket.emit("user_typing", {
                message: `${userData.name} is Typing`,
                roomId,
            });
        }
    };

    useEffect(() => {
        //Join room as soon as user enter the chat
        if (roomId) {
            socket.emit("join_room", roomId);
        }

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const handleTyping = (data: any) => {
            setTypingStatus(data.message);

            //Clear timeout after 2 second
            if (typingTimeout.current) clearTimeout(typingTimeout.current);

            //Set timeout for 2 second
            typingTimeout.current = setTimeout(() => {
                setTypingStatus("");
            }, 2000);
        };

        //Function to clear typing state
        const clearTypingDisplay = () => {
            setTypingStatus("");
            if (typingTimeout.current) clearTimeout(typingTimeout.current);
        };

        //listen for socket connection
        socket.on("stop_typing", clearTypingDisplay);
        socket.on("display_typing", handleTyping);

        return () => {
            //Clear listening event on unmount
            socket.off("display_typing", handleTyping);
            socket.off("stop_typing", clearTypingDisplay);
        };
    }, [roomId]);

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
                    [...chatLog]
                        .reverse()
                        .map((msg, i) => (
                            <MessageBubble key={i} msg={msg} user={userData} />
                        ))
                )}
            </section>

            <div className="h-6">
                {typingStatus && (
                    <p className="text-{14px} p-2 bg-receiver rounded-lg animate-pulse ml-2">
                        {typingStatus}...
                    </p>
                )}
            </div>
            <section className="bg-message-input w-full flex p-2 rounded-lg items-end">
                <textarea
                    ref={textAreaRef}
                    placeholder="Type a message"
                    value={textMessage}
                    onChange={(e) => setTextMessage(e.target.value)}
                    className="w-full flex-1 outline-none p-2 resize-none bg-transparent min-h-10 text-primary-text"
                    rows={1}
                    onKeyDown={handleKeydown}
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
