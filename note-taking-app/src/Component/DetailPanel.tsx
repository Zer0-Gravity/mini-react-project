import type { CollectionProps, Note } from "../utils/Type";
import { Link, useParams } from "react-router-dom";
import { IoMdCloseCircle } from "react-icons/io";
import NoteList from "./NoteList";
import { LuPlus } from "react-icons/lu";
import { useRef, useState, type Dispatch, type SetStateAction } from "react";
import NoteModal from "./NoteModal";

interface DetailProps {
    notes: CollectionProps[];
    setter: Dispatch<SetStateAction<CollectionProps[]>>;
}

function DetailPanel({ notes, setter }: DetailProps) {
    const { noteID } = useParams();
    const [modalNote, setModalNote] = useState<boolean>(false);
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [selectedNote, setSelectedNote] = useState<string>("");

    const titleRef = useRef<HTMLDivElement>(null);
    const descriptionRef = useRef<HTMLDivElement>(null);
    const currentNotes = notes.find((note) => note.collectionId === noteID);
    const activeNote = currentNotes?.note.find(
        (note) => note.documentId === selectedNote
    );

    const updateFinderHelper = (helper: (notes: Note[]) => Note[]) => {
        setter((prev) =>
            prev.map((col) =>
                col.collectionId === currentNotes?.collectionId
                    ? { ...col, note: helper(col.note) }
                    : col
            )
        );
    };

    const saveNote = (noteData: Note) => {
        updateFinderHelper((notes) =>
            isEditing
                ? notes.map((note) =>
                      note.documentId === selectedNote
                          ? { ...note, ...noteData }
                          : note
                  )
                : [...notes, noteData]
        );
    };

    const deleteNote = (noteId: string) => {
        updateFinderHelper((notes) =>
            notes.filter((note) => note.documentId !== noteId)
        );
    };

    const updateCollection = () => {
        const title = titleRef.current?.innerText ?? "";
        const description = descriptionRef.current?.innerHTML ?? "";

        setter((prev) =>
            prev.map((col) =>
                col.collectionId === currentNotes?.collectionId
                    ? {
                          ...col,
                          collectionName: title,
                          description: description,
                          date: new Date().toLocaleDateString(),
                      }
                    : col
            )
        );
    };

    const handleOpenNew = () => {
        setModalNote(true);
        setIsEditing(false);
    };

    return (
        <div className="w-137.5 h-full border p-10 flex flex-col bg-primary-color">
            {currentNotes ? (
                <div className="flex-1 space-y-7">
                    <section className="flex justify-between">
                        <div>
                            <h1
                                ref={titleRef}
                                contentEditable
                                dangerouslySetInnerHTML={{
                                    __html: currentNotes.collectionName,
                                }}
                                className="text-[40px] font-semibold outline-none"
                            ></h1>
                            <h1>
                                Date modified: <i>{currentNotes.date}</i>
                            </h1>
                        </div>
                        <Link to="/">
                            <IoMdCloseCircle size={25} color="#ff7a5c" />
                        </Link>
                    </section>

                    <section className="space-y-3">
                        <h2>Description : </h2>
                        <div
                            className="p-2 w-full min-h-32.5 bg-third-color outline-none rounded-lg"
                            ref={descriptionRef}
                            contentEditable
                            dangerouslySetInnerHTML={{
                                __html: currentNotes.description,
                            }}
                        ></div>
                    </section>
                    <section className="space-y-3">
                        <div className="flex justify-between">
                            <h1>Note</h1>
                            <button
                                className="flex items-center gap-1 bg-secondary-color py-1 px-2 rounded-lg"
                                onClick={handleOpenNew}
                            >
                                <LuPlus />
                                add
                            </button>

                            {/* This where new note created */}
                            {modalNote && (
                                <NoteModal
                                    onClose={() => setModalNote(false)}
                                    activeNote={activeNote}
                                    isEdit={isEditing}
                                    saveNote={saveNote}
                                    selectedNote={selectedNote}
                                />
                            )}
                        </div>

                        <NoteList
                            childArray={currentNotes.note}
                            setEdit={setIsEditing}
                            setSelectedNote={setSelectedNote}
                            activeNote={activeNote}
                            isEdit={isEditing}
                            saveNote={saveNote}
                            selectedNote={selectedNote}
                            deleteNote={deleteNote}
                        />
                    </section>
                </div>
            ) : (
                <div>No Note here</div>
            )}
            <button
                onClick={updateCollection}
                className="flex p-2 bg-secondary-color justify-center rounded-lg"
            >
                Save
            </button>
        </div>
    );
}
export default DetailPanel;
