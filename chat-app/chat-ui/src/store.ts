import { create } from "zustand";
import type { MessagesObj, ModalType, RoomList } from "./type";

export const useModal = create<ModalType>((set) => ({
    modalType: null,
    openModal: (type) => set({ modalType: type }),
    closeModal: () => set({ modalType: null }),
}));

export const useRoom = create<RoomList>((set) => ({
    roomList: [
        {
            roomId: "P4l8CRGQ",
            roomName: "Public Room",
            messages: [] as MessagesObj[],
        },
    ],
    addRooms: (room) =>
        set((state) => ({ roomList: [...state.roomList, room] })),
    addMessages: (message, roomId) =>
        set((state) => ({
            roomList: state.roomList.map((room) =>
                room.roomId === roomId
                    ? { ...room, messages: [...room.messages, message] }
                    : room,
            ),
        })),
}));