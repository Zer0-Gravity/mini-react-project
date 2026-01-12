import type { Note } from "../utils/Type";

interface NoteModalProps {
    onClose: () => void;
    activeNote: Note | undefined;
    isEdit: boolean;
}

function NoteModal({ onClose, activeNote, isEdit }: NoteModalProps) {
    return (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <div className="bg-white">
                <div contentEditable>
                    {isEdit ? activeNote?.title : "Untitled"}
                </div>
                <div contentEditable>{isEdit ? activeNote?.body : ""}</div>
                <div>
                    <button onClick={onClose}>Close</button>
                    <button>Save</button>
                </div>
            </div>
        </div>
    );
}

export default NoteModal;
