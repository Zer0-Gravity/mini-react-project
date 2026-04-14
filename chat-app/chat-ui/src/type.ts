export interface MessagesObj {
    author: string;
    message: string;
    time: string;
}

export interface RoomType {
    roomId: string;
    roomName: string;
    messages: MessagesObj[];
}
