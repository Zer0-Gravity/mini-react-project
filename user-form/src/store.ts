/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";

interface PasswordProp {
    togglePass: boolean;
    setTogglePass: () => void;
}

interface AuthUser {
    user: any | null;
    isLoading: boolean;
    setUser: (user: any) => void;
    setLoading: (bool: boolean) => void;
}

interface UserProps {
    firstName: string;
    lastName: string;
    email: string;
}

interface DatabaseProp {
    data: UserProps | null;
    setData: (data: UserProps) => void;
}

export const useAuthUser = create<AuthUser>((set) => ({
    user: null,
    isLoading: true,
    setUser: (user) => set({ user, isLoading: false }),
    setLoading: (bool) => set({ isLoading: bool }),
}));

export const usePassword = create<PasswordProp>((set) => ({
    togglePass: false,
    setTogglePass: () => set((state) => ({ togglePass: !state.togglePass })),
}));

export const useDataAuth = create<DatabaseProp>((set) => ({
    data: null,
    setData: (serverData) => set({ data: serverData }),
}));
