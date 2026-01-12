import type { CollectionProps } from "../utils/Type";
import { Link, useParams } from "react-router-dom";
import { IoMdCloseCircle } from "react-icons/io";
import NoteList from "./NoteList";
import { LuPlus } from "react-icons/lu";
import { useState } from "react";
import NoteModal from "./NoteModal";

interface DetailProps {
    notes: CollectionProps[];
}

function DetailPanel({ notes }: DetailProps) {
    const { noteID } = useParams();
    const [modalNote, setModalNote] = useState<boolean>(false);
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [selectedNote, setSelectedNote] = useState<string>("");

    const currentNotes = notes.find((note) => note.collectionId === noteID);
    const activeNote = currentNotes?.note.find(
        (note) => note.documentId === selectedNote
    );

    const handleOpenNew = () => {
        setModalNote(true);
        setIsEditing(false);
    };

    return (
        <div className="w-137.5 h-full border p-4">
            {currentNotes ? (
                <div>
                    <section className="flex justify-between">
                        <div>
                            <h1>{currentNotes.collectionName}</h1>
                            <p>
                                Date modified: <i>{currentNotes.date}</i>
                            </p>
                        </div>
                        <Link to="/">
                            <IoMdCloseCircle size={25} />
                        </Link>
                    </section>

                    <section>
                        <h2>Description : </h2>
                        <p className="p-2">{currentNotes.description}</p>
                    </section>
                    <section>
                        <div className="flex justify-between">
                            <h1>Note</h1>
                            <button onClick={handleOpenNew}>
                                <LuPlus />
                            </button>

                            {/* This where new note created */}
                            {modalNote && (
                                <NoteModal
                                    onClose={() => setModalNote(false)}
                                    activeNote={activeNote}
                                    isEdit={isEditing}
                                />
                            )}
                        </div>

                        <NoteList
                            childArray={currentNotes.note}
                            setEdit={setIsEditing}
                            setSelectedNote={setSelectedNote}
                            activeNote={activeNote}
                            isEdit={isEditing}
                        />
                    </section>
                </div>
            ) : (
                <div>No Note here</div>
            )}
        </div>
    );
}
export default DetailPanel;
