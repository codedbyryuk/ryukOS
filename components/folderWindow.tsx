"use client";

import { useEffect, useState } from "react";
import { filesystem } from "@/data/filesystem";
import TextFileWindow from "./textFileWindow";
import { db } from "@/lib/firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import DraggableWindow from "./dragabbleWindow";
type CommentFile = {
    name: string;
    type: "file";
    content: string;
};

type FolderWindowProps = {
    folderName: keyof typeof filesystem;
    files: typeof filesystem[keyof typeof filesystem];
    onClose: () => void;
};

export default function FolderWindow({
    folderName,
    files,
    onClose,
}: FolderWindowProps) {

    const [openFile, setOpenFile] = useState<{
        name: string;
        content: string;
    } | null>(null);

    const [comments, setComments] = useState<CommentFile[]>([]);

  
    useEffect(() => {

        if (folderName !== "Comments") return;

        const q = query(collection(db, "comments"), orderBy("createdAt", "desc"));

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const fetchedComments: CommentFile[] = snapshot.docs.map((doc, index) => {
                const data = doc.data();
                return {
                    name: `comment-${index + 1}.txt`,
                    type: "file",
                    content: `Author: ${data.author || "Anonymous"}\n\n${data.text || ""}`,
                };


            });
            setComments(fetchedComments);
        });

        return () => unsubscribe();

    }, [folderName]);


    return (
        <>
            {/* Folder Window */}
            <DraggableWindow className="absolute left-100 top-50 flex h-[620px] w-[750px] flex-col overflow-hidden rounded-xl border border-black/10 bg-[#f5f5f5] text-black shadow-2xl"

                titleBar={<div className="flex h-12 shrink-0 items-center justify-between border-b border-black/10 bg-[#eeeeee] px-4">

                    <div className="flex items-center gap-2">

                        <span className="text-lg">
                            📁
                        </span>

                        <span className="text-sm font-medium">
                            {folderName}
                        </span>

                    </div>


                    <button
                        onClick={onClose}
                        className="flex h-7 w-8 items-center justify-center rounded-md text-gray-600 hover:bg-red-500 hover:text-white"
                    >
                        ×
                    </button>

                </div>}
            >


                {/* Title bar */}




                {/* Files */}

                <div className="flex-1 overflow-auto bg-white p-5">

                    <div className="grid grid-cols-5 gap-4">


                        {/* RyukOS files */}

                        {!Array.isArray(files) &&
                            Object.entries(files.children).map(
                                ([fileName, file]) => (

                                    <div
                                        key={fileName}
                                        onDoubleClick={() =>
                                            setOpenFile({
                                                name: fileName,
                                                content: file.content,
                                            })
                                        }
                                        className="flex cursor-pointer flex-col items-center gap-2 rounded-lg p-3 hover:bg-blue-50"
                                    >

                                        <div className="text-4xl">
                                            📄
                                        </div>

                                        <span className="max-w-24 truncate text-center text-[18px]">
                                            {fileName}
                                        </span>

                                    </div>

                                )
                            )
                        }


                       

                        {Array.isArray(files) &&
                            folderName !== "Comments" &&
                            files.map((file) => {

                                if (typeof file === "string") {
                                    return (
                                        <div
                                            key={file}
                                            className="flex cursor-pointer flex-col items-center gap-2 rounded-lg p-3 hover:bg-blue-50"
                                        >
                                            <div className="text-4xl">
                                                📄
                                            </div>

                                            <span className="max-w-24 truncate text-center text-[18px]">
                                                {file}
                                            </span>
                                        </div>
                                    );
                                }

                                return (
                                    <div
                                        key={file.name}
                                        onDoubleClick={() => {
                                            window.open(
                                                file.url,
                                                "_blank",
                                                "noopener,noreferrer"
                                            );
                                        }}
                                        className="flex cursor-pointer flex-col items-center gap-2 rounded-lg p-3 hover:bg-blue-50"
                                    >
                                        <div className="text-4xl">
                                            📄
                                        </div>

                                        <span className="max-w-24 truncate text-center text-[18px]">
                                            {file.name}
                                        </span>
                                    </div>
                                );
                            })
                        }


                        {/* Comments */}

                        {folderName === "Comments" &&
                            comments.map((comment) => (

                                <div
                                    key={comment.name}
                                    onDoubleClick={() =>
                                        setOpenFile({
                                            name: comment.name,
                                            content: comment.content,
                                        })
                                    }
                                    className="flex cursor-pointer flex-col items-center gap-2 rounded-lg p-3 hover:bg-blue-50"
                                >

                                    <div className="text-4xl">
                                        📄
                                    </div>

                                    <span className="max-w-24 truncate text-center text-[18px]">
                                        {comment.name}
                                    </span>

                                </div>

                            ))
                        }


                    </div>

                </div>


                {/* Status bar */}

                <div className="flex h-8 shrink-0 items-center border-t border-black/10 bg-[#f5f5f5] px-4 text-xs text-gray-500">

                    {folderName === "Comments"
                        ? comments.length
                        : Array.isArray(files)
                            ? files.length
                            : Object.keys(files.children).length
                    }

                    {" "}

                    {(folderName === "Comments"
                        ? comments.length
                        : Array.isArray(files)
                            ? files.length
                            : Object.keys(files.children).length
                    ) === 1
                        ? "item"
                        : "items"
                    }

                </div>





                {/* Text File Window */}

                {openFile && (
                    <TextFileWindow
                        fileName={openFile.name}
                        content={openFile.content}
                        onClose={() => setOpenFile(null)}
                    />
                )}
            </DraggableWindow>

        </>
    );
}