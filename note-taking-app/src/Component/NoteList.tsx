import { LuFile, LuTrash2 } from "react-icons/lu";
import type { Note } from "../utils/Type";
import { useState, type Dispatch, type SetStateAction } from "react";
import NoteModal from "./NoteModal";

interface NoteProps {
    childArray: Note[];
    setEdit: Dispatch<SetStateAction<boolean>>;
    setSelectedNote: Dispatch<SetStateAction<string>>;
    activeNote: Note | undefined;
    isEdit: boolean;
}

function NoteList({
    childArray,
    setEdit,
    setSelectedNote,
    activeNote,
    isEdit,
}: NoteProps) {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const handleFlag = (noteId: string) => {
        setIsModalOpen(true);
        setSelectedNote(noteId);
        setEdit(true);
    };

    return (
        <div>
            <div>
                {childArray.length !== 0 ? (
                    childArray.map((note) => (
                        <div
                            key={note.documentId}
                            onClick={() => handleFlag(note.documentId)}
                            className="cursor-pointer"
                        >
                            <LuFile />
                            <h1>{note.title}</h1>
                            <LuTrash2 />
                        </div>
                    ))
                ) : (
                    <h1>No note here</h1>
                )}
            </div>

            {isModalOpen && (
                <NoteModal
                    onClose={() => setIsModalOpen(false)}
                    activeNote={activeNote}
                    isEdit={isEdit}
                />
            )}
        </div>
    );
}

export default NoteList;
