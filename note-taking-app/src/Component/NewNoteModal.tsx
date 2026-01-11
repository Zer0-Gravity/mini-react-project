interface NoteModalProps {
    onClose: () => void;
}

function NewNoteModal({ onClose }: NoteModalProps) {
    return (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <div className="bg-white">
                <div>
                    <button onClick={onClose}>Close</button>
                    <button>Save</button>
                </div>
            </div>
        </div>
    );
}

export default NewNoteModal;
