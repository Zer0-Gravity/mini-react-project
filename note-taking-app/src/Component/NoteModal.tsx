import { useRef } from "react";
import type { Note } from "../utils/Type";

interface NoteModalProps {
    onClose: () => void;
    activeNote: Note | undefined;
    isEdit: boolean;
    saveNote: (note: Note) => void;
    selectedNote: string;
}

function NoteModal({
    onClose,
    activeNote,
    isEdit,
    saveNote,
    selectedNote,
}: NoteModalProps) {
    const titleRef = useRef<HTMLDivElement>(null);
    const bodyRef = useRef<HTMLDivElement>(null);

    const handleSave = () => {
        const title = titleRef.current?.innerHTML ?? "";
        const body = bodyRef.current?.innerHTML ?? "";

        const noteData = {
            documentId: isEdit ? selectedNote : crypto.randomUUID(),
            title: title,
            body: body,
        };

        saveNote(noteData);
    };

    return (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <div className="bg-white">
                <div contentEditable ref={titleRef}>
                    {isEdit ? activeNote?.title : "Untitled"}
                </div>
                <div contentEditable ref={bodyRef}>
                    {isEdit ? activeNote?.body : ""}
                </div>
                <div>
                    <button onClick={onClose}>Close</button>
                    <button onClick={handleSave}>Save</button>
                </div>
            </div>
        </div>
    );
}

export default NoteModal;
