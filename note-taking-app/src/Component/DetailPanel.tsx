import { useState } from "react";
import { LuFile, LuPlus, LuTrash2 } from "react-icons/lu";
import type { CollectionProps } from "../utils/Type";
import { Link, useParams } from "react-router-dom";
import { IoMdCloseCircle } from "react-icons/io";

interface DetailProps {
    notes: CollectionProps[];
}

function DetailPanel({ notes }: DetailProps) {
    const { noteID } = useParams();
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const currentNotes = notes.find((note) => note.collectionId === noteID);

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
                            <button>
                                <LuPlus />
                            </button>
                        </div>

                        <div>
                            {currentNotes.note.length !== 0 ? (
                                currentNotes.note.map((note) => (
                                    <div
                                        key={note.documentId}
                                        onClick={() =>
                                            setIsModalOpen(!isModalOpen)
                                        }
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
                    </section>
                </div>
            ) : (
                <div>No Note here</div>
            )}
        </div>
    );
}
export default DetailPanel;
