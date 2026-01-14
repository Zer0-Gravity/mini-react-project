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
        setModalInput(false);
    };

    //Delete collection function
    const deleteCollection = (uuid: string) => {
        setter((prev) => prev.filter((note) => note.collectionId !== uuid));
    };

    return (
        <div className="h-full w-137.5 bg-primary-color p-10 rounded-lg">
            {/* Header */}
            <header className="flex justify-between mb-10 items-center">
                <h1 className="text-[32px] font-semibold text-text-light">
                    Note Collection
                </h1>
                {/* Trigger modal flag to true when user click +New Collection */}
                <button
                    className="flex items-center gap-2 bg-secondary-color p-2 rounded-lg"
                    onClick={() => setModalInput(true)}
                >
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
