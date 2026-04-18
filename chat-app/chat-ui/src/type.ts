export interface MessagesObj {
    authorId: string;
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
    addMessages: (message: MessagesObj, roomId: string | undefined) => void;
}

export interface ModalType {
    modalType: string | null;
    openModal: (type: string) => void;
    closeModal: () => void;
}

export interface UserMessages {
    messages: MessagesObj[];
    addMessages: (message: MessagesObj) => void;
}

export interface ThemeState {
    isDark: boolean;
    toggleTheme: () => void;
}

export interface UserProfile {
    id: string;
    name: string;
}

export interface UserState {
    userData: UserProfile;
    addUser: (newUser: UserProfile) => void;
}
