import { useRef } from "react";
import type { Note } from "../utils/Type";
import { IoMdCloseCircle } from "react-icons/io";

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
        onClose();
    };

    return (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <div className="bg-third-color w-200 h-237.5 p-10 flex flex-col rounded-lg">
                <div className="flex justify-between">
                    <div
                        key={activeNote?.documentId}
                        contentEditable
                        ref={titleRef}
                        data-placeholder={
                            isEdit ? activeNote?.title : "Untitled"
                        }
                        className="empty-editor p-3 outline-none text-xl"
                    ></div>
                    <IoMdCloseCircle size={25} onClick={onClose} />
                </div>

                <div
                    key={activeNote?.documentId}
                    contentEditable
                    ref={bodyRef}
                    dangerouslySetInnerHTML={{
                        __html:
                            (isEdit ? activeNote?.body : "Start typing") ?? "",
                    }}
                    className="empty-editor flex-1 p-3 outline-none"
                ></div>
                <div className="flex justify-end gap-5">
                    <button
                        onClick={onClose}
                        className="bg-gray-300 w-20 py-1.5 rounded-lg animate-button"
                    >
                        Close
                    </button>
                    <button
                        onClick={handleSave}
                        className="bg-secondary-color w-20 py-1.5 rounded-lg animate-button"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}

export default NoteModal;
