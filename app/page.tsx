
"use client"

import Folder from "@/components/folder";
import Terminal from "@/components/terminal";
import { useState, useEffect } from "react";


export default function Home() {
  const [openTerminal, setOpenTerminal] = useState(false);
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000)
  })
  return (
    <main className="h-screen w-screen flex flex-col overflow-hidden bg-[url('/bg-image.jpg')] bg-cover">

      <div className="relative px-16 overflow-hidden py-18 flex-1 flex gap-15 items-start justify-between">
        <div className="flex gap-15 items-start overflow-hidden">
          <div className="grid gap-10 grid-rows-7">
            <Folder folderName={"RyukOS"} />
            <Folder folderName={"Projects"} />
            <Folder folderName={"Notes"} />

          </div>

          <div
            onDoubleClick={(e) => {
              e.preventDefault();

              const link = document.createElement("a");
              link.href = "https://codedbyryuk.pages.dev/";
              link.target = "_blank";
              link.rel = "noopener noreferrer";
              link.click();
            }}

            className="flex gap-8 flex-col items-center justify-center">
            <div className="flex hover:bg-[#ffffff6b] p-2 rounded-[12px] hover:cursor-pointer items-center justify-center flex-col">
              <img className="w-16" src="/pfp_def.png" alt="" />
              <span className="text-black text-[20px]">Portfolio</span>
            </div>
            <div onDoubleClick={(e) => {
              e.preventDefault();

              const link = document.createElement("a");
              link.href = "https://github.com/codedbyryuk";
              link.target = "_blank";
              link.rel = "noopener noreferrer";
              link.click();
            }}
              className="flex hover:bg-[#ffffff6b] p-2 rounded-[12px] hover:cursor-pointer items-center justify-center flex-col">
              <svg className="w-13" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="rgb(0, 0, 0)" d="M384 32c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0zM223.7 96c-88.4 0-159.7 72.2-159.7 160.6 0 69.4 44.1 126.9 103.4 148.4 8.4 3.1 16.6-2.5 16.6-10.9l0-25c-4.4 1.9-10 3.1-15 3.1-20.6 0-32.8-11.2-41.6-32.2-3.4-8.4-7.2-13.4-14.4-14.4-3.7-.3-5-1.9-5-3.8 0-3.7 6.2-6.6 12.5-6.6 9.1 0 16.9 5.6 25 17.2 6.2 9.1 12.8 13.1 20.6 13.1s12.8-2.8 20-10c5.3-5.3 9.4-10 13.1-13.1-41.3-5-70.3-34.7-70.3-73.1 0-15.6 5.6-32.5 15-43.8-4.1-10.3-3.4-32.2 1.2-41.2 12.5-1.6 29.4 5 39.4 14.1 11.9-3.7 24.4-5.6 39.7-5.6s27.8 1.9 39.1 5.3c9.7-8.8 26.9-15.3 39.4-13.8 4.4 8.4 5 30.3 .9 40.9 10 11.9 15.3 27.8 15.3 44.1 0 38.4-29.1 67.5-70.9 72.8 10.6 6.9 17.8 21.9 17.8 39.1l0 32.5c0 9.4 7.8 14.7 17.2 10.9 56.6-21.6 100.9-78.1 100.9-148.1 0-88.4-71.9-160.6-160.3-160.6z" /></svg>
              <span className="text-black text-[20px]">Github</span>
            </div>
          </div>
          {openTerminal && (
            <Terminal onClose={() => setOpenTerminal(false)} />
          )}


        </div>
        <div className="flex flex-col text-right pointer-events-none">
          <span className="text-9xl font-jersey text-[#ffffff7b]">{new Date().toLocaleDateString()}</span>
          <span className="text-[11rem] font-jersey text-[#ffffff5c]">{new Date().toLocaleTimeString([],{
            hour:'2-digit',
            minute:'2-digit',
            hour12:false,
          })}</span>
        </div>


      </div>
      <div className="h-16 bg-[#caf0ff] w-full flex px-16 items-center justify-between">

        <span className="font-jersey text-3xl text-white bg-blue-500 p-2 rounded-[8px]">ROS</span>

        <div className="flex items-center justify-center gap-8">
          <svg className="p-1 w-9 hover:scale-125 bg-blue-400 rounded-[8px] transition-all " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="lightGreen" d="M320 32l-8.6 0C300.4 12.9 279.7 0 256 0L128 0C104.3 0 83.6 12.9 72.6 32L64 32C28.7 32 0 60.7 0 96L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-352c0-35.3-28.7-64-64-64zM136 112c-13.3 0-24-10.7-24-24s10.7-24 24-24l112 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-112 0z" /></svg>
          <svg onClick={() => setOpenTerminal(true)} className="p-2 w-10 hover:scale-125 bg-blue-400 rounded-[8px] transition-all " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="rgb(0, 0, 0)" d="M9.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L146.7 256 9.4 118.6zM224 384l256 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z" /></svg>
        </div>


      </div>

    </main>
  );
}
