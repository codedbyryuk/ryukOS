'use client'
import { useState } from "react"

type NotepadProps = {
    onClose: () => void
}

export default function Notepad({ onClose }: NotepadProps) {
    const [text, setText] = useState('');
    const saveNote = () => {
        if (!text.trim()) return;
        const existingNotes = JSON.parse(
            localStorage.getItem("ryuk-comments") || "[]"

            );

        const newNote = {
            name:`comment-${existingNotes.length +1}.txt`,
            type:"file",
            content:text
        }

        localStorage.setItem("ryuk-comments",JSON.stringify([...existingNotes,newNote]))

        alert("Note Saved!");
        setText("");
    }
    return (
        <div className="absolute top-40 left-20 z-50 flex h-[600px] w-[800px] flex-col overflow-hidden rounded-[12px] border border-black/20 bg-[#f5f5f5] shadow-2xl">

            <div className="flex h-10 shrink-0 items-center justify-between bg-[#e7e7e7] px-4">
                <span className="text-sm font-medium text-black">
                    Notepad
                </span>

                <button
                    onClick={onClose}
                    className="flex h-7 w-7 items-center justify-center rounded text-black hover:bg-red-500 hover:text-white"
                >
                    ×
                </button>
            </div>
            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Write something..."
                spellCheck={false}
                className="flex-1 resize-none bg-white p-5 font-mono text-[15px] text-black outline-none"
            />
            <div className="flex h-12 items-center justify-end border-t border-black/10 bg-[#e7e7e7] px-4">

                <button
                    onClick={saveNote}
                    className="rounded-[8px] bg-black px-4 py-2 text-sm text-white hover:bg-gray-800"
                >
                    Save
                </button>

            </div>

        </div>
    )
}