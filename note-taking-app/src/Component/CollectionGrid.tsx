import { LuExternalLink, LuFolder, LuPlus, LuTrash2 } from "react-icons/lu";
import type { CollectionProps } from "../utils/Type";
import { Link } from "react-router-dom";
import { useState, type Dispatch, type SetStateAction } from "react";
import Modal from "./Modal";
import type { Note } from "../utils/Type";

interface CardProps {
    notes: CollectionProps[];
    setter: Dispatch<SetStateAction<CollectionProps[]>>;
}

function CollectionGrid({ notes, setter }: CardProps) {
    const [modalInput, setModalInput] = useState<boolean>(false);
    const [collectionTitle, setCollectionTitle] = useState<string>("");
    const [collectionDesc, setCollectionDesc] = useState<string>("");

    const addNewCollection = () => {
        const newCollection = {
            collectionId: crypto.randomUUID(),
            collectionName: collectionTitle,
            date: new Date().toLocaleDateString(),
            description: collectionDesc ? collectionDesc : "",
            note: [] as Note[],
        };

        setter((prev) => [...prev, newCollection]);
    };

    return (
        <div className="h-full w-137.5">
            {/* Search Bar */}
            <section>
                <input type="search" placeholder="Search..." />
            </section>

            {/* Header */}
            <header className="flex justify-between">
                <h1>Note Collection</h1>
                <button className="flex" onClick={() => setModalInput(true)}>
                    <LuPlus /> New Collection
                </button>

                {modalInput && (
                    <Modal
                        onClose={() => setModalInput(false)}
                        inputHandler={{
                            setCollectionTitle,
                            setCollectionDesc,
                            addNewCollection,
                        }}
                    />
                )}
            </header>

            {/* Card List */}
            <section className="flex gap-2 flex-wrap">
                {notes.length !== 0 ? (
                    notes.map((note) => (
                        <div
                            key={note.collectionId}
                            className="border flex flex-col w-57.5 h-20 p-2 justify-between"
                        >
                            <div className="flex">
                                <LuFolder size={25} />
                                <h3>{note.collectionName}</h3>
                            </div>

                            <div className="flex justify-end gap-2">
                                <button>
                                    <Link to={`/detail/${note.collectionId}`}>
                                        <LuExternalLink />
                                    </Link>
                                </button>
                                <button>
                                    <LuTrash2 />
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <h1>No collection</h1>
                )}
            </section>
        </div>
    );
}

export default CollectionGrid;
