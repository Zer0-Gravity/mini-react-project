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

export interface RoomList {
    roomList: RoomType[];
    addRooms: (room: RoomType) => void;
}

export interface ModalType {
    modalType: string | null;
    openModal: (type: string) => void;
    closeModal: () => void;
}
