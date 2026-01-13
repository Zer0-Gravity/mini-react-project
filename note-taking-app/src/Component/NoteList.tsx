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
    saveNote: (note: Note) => void;
    selectedNote: string;
    deleteNote: (noteId: string) => void;
}

function NoteList({
    childArray,
    setEdit,
    setSelectedNote,
    activeNote,
    isEdit,
    saveNote,
    selectedNote,
    deleteNote,
}: NoteProps) {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const handleFlag = (noteId: string) => {
        setIsModalOpen(true);
        setSelectedNote(noteId);
        setEdit(true);
    };

    return (
        <div>
            <div className="bg-third-color p-3 rounded-lg h-110 overflow-y-auto overflow-hidden scrollbar-hidden">
                {childArray.length !== 0 ? (
                    childArray.map((note) => (
                        <div
                            key={note.documentId}
                            className="flex rounded-lg items-center justify-between bg-secondary-color my-1 p-2"
                        >
                            <div
                                onClick={() => handleFlag(note.documentId)}
                                className="cursor-pointer flex items-center gap-3 flex-1"
                            >
                                <LuFile />
                                <p>{note.title}</p>
                            </div>
                            <div>
                                <LuTrash2
                                    onClick={() => deleteNote(note.documentId)}
                                />
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center">No note here</p>
                )}
            </div>

            {isModalOpen && (
                <NoteModal
                    onClose={() => setIsModalOpen(false)}
                    activeNote={activeNote}
                    isEdit={isEdit}
                    saveNote={saveNote}
                    selectedNote={selectedNote}
                />
            )}
        </div>
    );
}

export default NoteList;
