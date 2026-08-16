'use client'

type TextFileWindowProp={
    fileName:string,
    content:string,
    onClose:()=>void
}

export default function TextFileReader({fileName,content,onClose}:TextFileWindowProp){
    return(
        <div className="absolute left-100 top-50 flex h-[650px] w-[750px] flex-col overflow-hidden rounded-xl border border-black/10 bg-[#f5f5f5] text-black shadow-2xl">

    
      <div className="flex h-11 shrink-0 items-center justify-between border-b border-black/10 bg-[#eeeeee] px-4">

        <div className="flex items-center gap-2">
          <span className="text-sm">📄</span>
          <span className="text-sm font-medium">
            {fileName}
          </span>
        </div>

        <button
          onClick={onClose}
          className="flex h-7 w-8 items-center justify-center rounded-md text-gray-600 hover:bg-red-500 hover:text-white"
        >
          ×
        </button>

      </div>

      
      <div className="flex-1 overflow-auto bg-white p-5">
        <pre className="whitespace-pre-wrap font-mono text-[20px] leading-6 text-gray-800">
          {content}
        </pre>
      </div>

    </div>
    )
}