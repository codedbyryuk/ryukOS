"use client";

import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp, doc } from "firebase/firestore";
import { useState } from "react";

type NotepadProps = {
    onClose: () => void;
};

export default function Notepad({ onClose }: NotepadProps) {

    const [name, setName] = useState("");
    const [text, setText] = useState("");

    const MAX_LENGTH = 500;

    const saveNote = async () => {

        if (!name.trim()) {
            alert("Please enter your name.");
            return;
        }

        if (!text.trim()) {
            alert("Please write something first.");
            return;
        }


        try {
            await addDoc(collection(db, "comments"), {
                author: name.trim(),
                text: text.trim(),
                createdAt: serverTimestamp(),
            });

            alert("Comment Saved");
            setName("");
            setText("")
            onClose();
        } catch (error) {
            console.error("Error saving file:", error);
            alert("Failed to Save Note");
        }


        //         const existingNotes = JSON.parse(
        //             localStorage.getItem("ryuk-comments") || "[]"
        //         );

        //         const newNote = {
        //             name: `comment-${existingNotes.length + 1}.txt`,
        //             type: "file",
        //             content: `Author: ${name.trim()}

        // ${text.trim()}`,
        //         };

        //         localStorage.setItem(
        //             "ryuk-comments",
        //             JSON.stringify([...existingNotes, newNote])
        //         );

        //         alert("Comment saved!");

        //         setName("");
        //         setText("");
    };

    return (
        <div className="absolute left-40 top-20 flex h-[600px] w-[700px] flex-col overflow-hidden rounded-[12px] border border-black/20 bg-[#f5f5f5] text-black shadow-2xl">

            {/* Title bar */}

            <div className="flex h-10 shrink-0 items-center justify-between bg-[#e7e7e7] px-4">

                <span className="text-sm font-medium">
                    Notepad
                </span>

                <button
                    onClick={onClose}
                    className="flex h-7 w-7 items-center justify-center rounded text-black hover:bg-red-500 hover:text-white"
                >
                    ×
                </button>

            </div>


            {/* Name */}

            <div className="border-b border-black/10 bg-[#eeeeee] px-4 py-3">

                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    maxLength={40}
                    className="w-full rounded-md border border-black/10 bg-white px-3 py-2 text-sm outline-none focus:border-black/30"
                />

            </div>


            {/* Text */}

            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Write something..."
                maxLength={MAX_LENGTH}
                spellCheck={false}
                className="flex-1 resize-none bg-white p-5 font-mono text-[15px] text-black outline-none"
            />


            {/* Bottom bar */}

            <div className="flex h-12 shrink-0 items-center justify-between border-t border-black/10 bg-[#e7e7e7] px-4">

                <span className="text-xs text-gray-500">
                    {text.length}/{MAX_LENGTH}
                </span>

                <button
                    onClick={saveNote}
                    className="rounded-[8px] bg-black px-4 py-2 text-sm text-white transition hover:bg-gray-800"
                >
                    Save
                </button>

            </div>

        </div>
    );
}