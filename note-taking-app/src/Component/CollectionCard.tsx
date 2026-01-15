import { LuFolder, LuTrash2 } from "react-icons/lu";
import { Link } from "react-router-dom";
import type { CollectionProps } from "../utils/Type";
import type React from "react";

interface CardProps {
    note: CollectionProps;
    delCollection: (e: React.MouseEvent, uuid: string) => void;
}

function CollectionCard({ note, delCollection }: CardProps) {
    return (
        <Link key={note.collectionId} to={`/detail/${note.collectionId}`}>
            <div className="flex flex-col bg-secondary-color w-55 h-20 p-2 justify-between rounded-lg text-text-dark">
                <div className="flex gap-3 items-center">
                    <LuFolder size={25} />
                    <h3 className="text-[20px] font-medium  truncate">
                        {note.collectionName}
                    </h3>
                </div>
                <div className="flex justify-end gap-2 ">
                    <button
                        onClick={(e) => delCollection(e, note.collectionId)}
                    >
                        <LuTrash2 size={20} />
                    </button>
                </div>
            </div>
        </Link>
    );
}

export default CollectionCard;
