"use client";

import { useState } from "react";
import FolderWindow from "./folderWindow";
import { filesystem } from "@/data/filesystem";

type FolderKey = keyof typeof filesystem;

export default function Folder({
    folderName,
}: {
    folderName: FolderKey;
}) {

    const [openFolder, setOpenFolder] =
        useState<FolderKey | null>(null);

    return (
        <div
            onDoubleClick={() => setOpenFolder(folderName)}
            className="flex cursor-pointer flex-col items-center justify-center rounded-md p-2 hover:bg-white/10"
        >

            {/* Folder icon */}

            <svg
                className="w-[55px]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
            >
                <path
                    fill="rgb(255, 212, 59)"
                    d="M64 448l384 0c35.3 0 64-28.7 64-64l0-240c0-35.3-28.7-64-64-64L298.7 80c-6.9 0-13.7-2.2-19.2-6.4L241.1 44.8C230 36.5 216.5 32 202.7 32L64 32C28.7 32 0 60.7 0 96L0 384c0 35.3 28.7 64 64 64z"
                />
            </svg>

            <span className="text-[20px] text-[#222222]">
                {folderName}
            </span>


            {/* Folder Window */}

            {openFolder && (
                <FolderWindow
                    folderName={openFolder}
                    files={filesystem[openFolder]}
                    onClose={() => setOpenFolder(null)}
                />
            )}

        </div>
    );
}