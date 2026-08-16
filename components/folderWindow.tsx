"use client";

import { useState } from "react";
import { filesystem } from "@/data/filesystem";
import TextFileWindow from "./textFileWindow";

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

    return (
        <>
            {/* Folder Window */}

            <div className="absolute left-100 top-50 flex h-[620px] w-[750px] flex-col overflow-hidden rounded-xl border border-black/10 bg-[#f5f5f5] text-black shadow-2xl">

                {/* Title bar */}

                <div className="flex h-12 shrink-0 items-center justify-between border-b border-black/10 bg-[#eeeeee] px-4">

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

                </div>


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


                        {/* Projects / Notes */}

                        {Array.isArray(files) &&
                            files.map((fileName) => (

                                <div
                                    key={fileName}
                                    className="flex cursor-pointer flex-col items-center gap-2 rounded-lg p-3 hover:bg-blue-50"
                                >

                                    <div className="text-4xl">
                                        📄
                                    </div>

                                    <span className="max-w-24 truncate text-center text-[18px]">
                                        {fileName}
                                    </span>

                                </div>

                            ))
                        }

                    </div>

                </div>


                {/* Status bar */}

                <div className="flex h-8 shrink-0 items-center border-t border-black/10 bg-[#f5f5f5] px-4 text-xs text-gray-500">

                    {Array.isArray(files)
                        ? files.length
                        : Object.keys(files.children).length
                    }

                    {" "}
                    {(
                        Array.isArray(files)
                            ? files.length
                            : Object.keys(files.children).length
                    ) === 1
                        ? "item"
                        : "items"
                    }

                </div>

            </div>


            {/* Text File Window */}

            {openFile && (
                <TextFileWindow
                    fileName={openFile.name}
                    content={openFile.content}
                    onClose={() => setOpenFile(null)}
                />
            )}

        </>
    );
}