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
        const title = titleRef.current?.innerText ?? "";
        const body = bodyRef.current?.innerHTML ?? "";

        const noteData = {
            documentId: isEdit ? selectedNote : crypto.randomUUID(),
            title: title ? title : "Untitled",
            body: body,
        };

        if (!body) {
            alert("Note can't be empty");
            return;
        }
        saveNote(noteData);
    };

    return (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <div className="bg-white">
                <div
                    key={activeNote?.documentId}
                    contentEditable
                    ref={titleRef}
                    data-placeholder={isEdit ? activeNote?.title : "Untitled"}
                    className="title-editor"
                ></div>
                <div
                    key={activeNote?.documentId}
                    contentEditable
                    ref={bodyRef}
                    dangerouslySetInnerHTML={{
                        __html: (isEdit ? activeNote?.body : "") ?? "",
                    }}
                    className="body-editor"
                ></div>
                <div>
                    <button onClick={onClose}>Close</button>
                    <button onClick={handleSave}>Save</button>
                </div>
            </div>
        </div>
    );
}

export default NoteModal;
