interface NoteModalProps {
    onClose: () => void;
    isEdit: boolean;
}

function NoteModal({ onClose, isEdit }: NoteModalProps) {
    return (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <div className="bg-white">
                <div contentEditable>{isEdit ? "Editing" : "New Note"}</div>
                <div>
                    <button onClick={onClose}>Close</button>
                    <button>Save</button>
                </div>
            </div>
        </div>
    );
}

export default NoteModal;
