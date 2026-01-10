import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import { CodeBlockLowlight } from "@tiptap/extension-code-block-lowlight";
import { common, createLowlight } from "lowlight";

interface NoteModalProps {
    onClose: () => void;
}

function NewNoteModal({ onClose }: NoteModalProps) {
    const lowlight = createLowlight(common);

    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                codeBlock: false,
            }),
            Placeholder.configure({
                emptyEditorClass:
                    "before:content-[attr(data-placeholder)] before:text-gray-400 before:float-left before:h-0 before:pointer-events-none",
                placeholder: ({ node }) => {
                    if (node.type.name === "heading" && node.attrs.level === 1)
                        return "Untitled";
                    return "Write something ";
                },
            }),
            CodeBlockLowlight.configure({ lowlight }),
        ],
    });

    return (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <div className="bg-white">
                <EditorContent editor={editor} />
                <div>
                    <button onClick={onClose}>Close</button>
                    <button>Save</button>
                </div>
            </div>
        </div>
    );
}

export default NewNoteModal;
