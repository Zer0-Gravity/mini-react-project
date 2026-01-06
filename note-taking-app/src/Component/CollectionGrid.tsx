import type { CollectionProps } from "../utils/Type";
import { useState, type Dispatch, type SetStateAction } from "react";
import Modal from "./Modal";
import type { Note } from "../utils/Type";
import CollectionCard from "./CollectionCard";
import { LuPlus } from "react-icons/lu";

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

    const deleteCollection = (uuid: string) => {
        setter((prev) => prev.filter((note) => note.collectionId !== uuid));
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
                        <CollectionCard
                            key={note.collectionId}
                            note={note}
                            delCollection={deleteCollection}
                        />
                    ))
                ) : (
                    <h1>No collection</h1>
                )}
            </section>
        </div>
    );
}

export default CollectionGrid;
