type FolderWindowProp = {
    folderName: string,
    files: string[],
    onClose: () => void
}



export default function FolderWindow({ folderName, files, onClose }: FolderWindowProp) {
    return (
        <div className="absolute left-100 top-50 flex h-[500px] w-[750px] flex-col overflow-hidden rounded-xl border border-black/10 bg-[#f5f5f5] text-black shadow-2xl">

            {/* Title bar */}
            <div className="flex h-12 shrink-0 items-center justify-between border-b border-black/10 bg-[#eeeeee] px-4">

                <div className="flex items-center gap-2">
                    <svg
                        className="h-5 w-5"
                        viewBox="0 0 512 512"
                    >
                        <path
                            fill="rgb(255, 212, 59)"
                            d="M64 448l384 0c35.3 0 64-28.7 64-64l0-240c0-35.3-28.7-64-64-64L298.7 80c-6.9 0-13.7-2.2-19.2-6.4L241.1 44.8C230 36.5 216.5 32 202.7 32L64 32C28.7 32 0 60.7 0 96L0 384c0 35.3 28.7 64 64 64z"
                        />
                    </svg>

                    <span className="text-sm font-medium">
                        {folderName}
                    </span>
                </div>


                {/* Window controls */}
                <div className="flex items-center gap-1">

                    <button className="flex h-7 w-8 items-center justify-center rounded-md text-gray-600 hover:bg-black/10">
                        −
                    </button>

                    <button className="flex h-7 w-8 items-center justify-center rounded-md text-gray-600 hover:bg-black/10">
                        □
                    </button>

                    <button
                        onClick={onClose}
                        className="flex h-7 w-8 items-center justify-center rounded-md text-gray-600 hover:bg-red-500 hover:text-white"
                    >
                        ×
                    </button>

                </div>

            </div>


            {/* Toolbar */}
            <div className="flex h-11 shrink-0 items-center gap-2 border-b border-black/10 bg-[#f8f8f8] px-3">

                <button className="rounded-md px-2 py-1 text-lg text-gray-500 hover:bg-black/5">
                    ←
                </button>

                <button className="rounded-md px-2 py-1 text-lg text-gray-500 hover:bg-black/5">
                    →
                </button>

                <div className="ml-2 flex h-7 flex-1 items-center rounded-md border border-black/10 bg-white px-3 text-xs text-gray-500">
                    Home / {folderName}
                </div>

            </div>


            {/* Files */}
            <div className="flex-1 overflow-auto bg-white p-5">

                <div className="grid grid-cols-5 gap-4">

                    {files.map((file) => (

                        <div
                            key={file}
                            className="flex cursor-pointer flex-col items-center gap-2 rounded-lg p-3 hover:bg-blue-50"
                        >

                            <svg className="w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="rgb(116, 192, 252)" d="M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-277.5c0-17-6.7-33.3-18.7-45.3L258.7 18.7C246.7 6.7 230.5 0 213.5 0L64 0zM325.5 176L232 176c-13.3 0-24-10.7-24-24L208 58.5 325.5 176z"/></svg>

                            <span className="max-w-24 truncate text-center text-xs">
                                {file}
                            </span>

                        </div>

                    ))}

                </div>

            </div>


            {/* Status bar */}
            <div className="flex h-8 shrink-0 items-center border-t border-black/10 bg-[#f5f5f5] px-4 text-xs text-gray-500">
                {files.length} {files.length === 1 ? "item" : "items"}
            </div>

        </div>
    )
}