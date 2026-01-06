import { LuExternalLink, LuFolder, LuTrash2 } from "react-icons/lu";
import { Link } from "react-router-dom";
import type { CollectionProps } from "../utils/Type";

interface CardProps {
    note: CollectionProps;
}

function CollectionCard({ note }: CardProps) {
    return (
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
    );
}

export default CollectionCard;
