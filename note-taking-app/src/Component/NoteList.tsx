import { LuFile, LuTrash2 } from "react-icons/lu";
import type { Note } from "../utils/Type";
import { useState } from "react";

interface NoteProps {
    childArray: Note[];
}

function NoteList({ childArray }: NoteProps) {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    return (
        <div>
            <div>
                {childArray.length !== 0 ? (
                    childArray.map((note) => (
                        <div
                            key={note.documentId}
                            onClick={() => setIsModalOpen(!isModalOpen)}
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

            {isModalOpen && <div>This is more detail page</div>}
        </div>
    );
}

export default NoteList;
