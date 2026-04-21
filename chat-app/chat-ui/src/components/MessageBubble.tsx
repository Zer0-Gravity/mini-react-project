import { User } from "lucide-react";
import type { MessagesObj, UserProfile } from "../type";
import { formatDate } from "../utils";
import Linkify from "linkify-react";

interface ChatBubbleType {
    msg: MessagesObj;
    user: UserProfile;
}

function MessageBubble({ msg, user }: ChatBubbleType) {
    const isSender = msg.authorId === user.id;

    const option = {
        className:
            "'text-blue-600 hover:text-blue-800 underline decoration-2 transition-colors'",
    };

    return (
        <div
            className={`flex gap-2 ${isSender ? "justify-end" : "justify-start"}`}
        >
            <div
                className={`bg-gray-400 p-2 rounded-full w-7.5 h-7.5 ${isSender ? "hidden" : "block"}`}
            >
                <User size={15} />
            </div>
            <div className="space-y-2">
                <div
                    className={`${isSender ? "bg-sender" : "bg-receiver"} text-primary-text p-3.75 rounded-lg max-w-200 space-y-2 min-w-20`}
                >
                    <p
                        className={`font-semibold text-[12px] text-gray-500 ${isSender ? "hidden" : "block"}`}
                    >
                        {msg.author}
                    </p>
                    <p
                        className={`${isSender ? "text-sender-text" : "text-receiver-text"} text-[14px] whitespace-pre-wrap`}
                    >
                        <Linkify options={option}>{msg.message}</Linkify>
                    </p>
                </div>
                <p
                    className={`text-[10px] text-gray-400 flex ${isSender ? "justify-end" : "justify-start"}`}
                >
                    {formatDate(msg.time)}
                </p>
            </div>
        </div>
    );
}

export default MessageBubble;
