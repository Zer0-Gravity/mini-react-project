interface ModalProps {
    onClose: () => void;
}

function Modal({ onClose }: ModalProps) {
    return (
        <div className="absolute bg-black/50 inset-0 flex items-center justify-center top-0">
            <div className="bg-white">
                <h1>Add new collection</h1>
                <input type="text" placeholder="Collection name..." />
                <div className="flex-">
                    <button onClick={onClose}>Cancel</button>
                    <button>Add</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;
