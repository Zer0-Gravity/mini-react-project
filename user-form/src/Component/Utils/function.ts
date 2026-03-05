import { usePassword } from "../../store";

export function useTogglePassword(): string {
    const { togglePass } = usePassword();

    return togglePass ? "text" : "password";
}
