import { LuFile, LuTrash2 } from "react-icons/lu";
import type { Note } from "../utils/Type";
import { useState, type Dispatch, type SetStateAction } from "react";
import NoteModal from "./NoteModal";

interface NoteProps {
    childArray: Note[];
    setClose: Dispatch<SetStateAction<boolean>>;
    setEdit: Dispatch<SetStateAction<boolean>>;
}

function NoteList({ childArray, setEdit }: NoteProps) {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const handleFlag = () => {
        setIsModalOpen(true);
        setEdit(true);
    };

    return (
        <div>
            <div>
                {childArray.length !== 0 ? (
                    childArray.map((note) => (
                        <div
                            key={note.documentId}
                            onClick={handleFlag}
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
                    isEdit={true}
                />
            )}
        </div>
    );
}

export default NoteList;
