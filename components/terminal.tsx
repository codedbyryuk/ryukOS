"use client"

import DraggableWindow from "./dragabbleWindow";
import { useState, useRef, useEffect } from "react";

type TerminalLine = {
    type: "input" | "output",
    text: string,

}
type TerminalProp = {
    onClose: () => void
}
export default function Terminal({ onClose }: TerminalProp) {

    const [input, setInput] = useState("");
    const [history, setHistory] = useState<TerminalLine[]>([
        {
            type: "output",
            text: "Welcome to RyukOS Shell."
        },
        {
            type: "output",
            text: 'Type "help" to see available command.'
        },
    ]);

    const InputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        InputRef.current?.focus();
    }, []);

    const runCommand = (command: string) => {
        const trimmedCommand = command.trim();
        if (!trimmedCommand) return;

        setHistory((prev) => [
            ...prev, {
                type: "input",
                text: trimmedCommand
            },
        ]);

        const parts = trimmedCommand.split(" ");

        const commandName = parts[0].toLowerCase();

        if (commandName === "help") {
            setHistory((prev) => [
                ...prev, {
                    type: "output",
                    text: "Available commands:\n" +
                        "  help       Show available commands\n" +
                        "  whoami     About me\n" +
                        "  projects   Show my projects\n" +
                        "  skills     Show my skills\n" +
                        "  clear      Clear the terminal\n" +
                        "  date       Show the current date\n" +
                        "  echo       Print text",
                },
            ]);

            return;
        }

        if (commandName === "whoami") {
            setHistory((prev) => [
                ...prev, {
                    type: "output",
                    text: "Fahim Akhtar\n" +
                        "aka Ryuk\n\n" +
                        "Developer & builder.\n" +
                        "I like creating weird things with code.",
                },
            ]);

            return;
        }

        if (commandName === "projects") {
            setHistory((prev) => [
                ...prev, {
                    type: "output",
                    text: "Projects:\n\n" +
                        "  • Modufy\n" +
                        "  • Circulr\n" +
                        "  • PokemonBidWars\n" +
                        "  • FireSideTalks",
                },
            ]);

            return;
        }


        if (commandName === "skills") {
            setHistory((prev) => [
                ...prev,
                {
                    type: "output",
                    text:
                        "Languages:\n" +
                        "  JavaScript\n" +
                        "  TypeScript\n" +
                        "  Python\n" +
                        "  C++\n" +
                        "  C\n" +
                        "  Java\n\n" +

                        "Frontend:\n" +
                        "  HTML\n" +
                        "  Node.js\n" +
                        "  Next.js\n" +
                        "  React\n" +
                        "  React Native\n\n" +

                        "Tools:\n" +
                        "  Git\n" +
                        "  Linux\n" +
                        "  Firebase\n" +
                        "  Cloudflare",
                },
            ]);

            return;
        }
        if (commandName === "date") {

            setHistory((prev) => [
                ...prev,
                {
                    type: "output",
                    text: new Date().toString(),
                },
            ]);

            return;
        }



        if (commandName === "echo") {

            const message = parts.slice(1).join(" ");

            setHistory((prev) => [
                ...prev,
                {
                    type: "output",
                    text: message,
                },
            ]);

            return;
        }



        if (commandName === "clear") {

            setHistory([]);

            return;
        }



        setHistory((prev) => [
            ...prev,
            {
                type: "output",
                text: `command not found: ${commandName}`,
            },
        ]);
    }

    const handleKeyDown = (
        e: React.KeyboardEvent<HTMLInputElement>
    ) => {
        if (e.key === "Enter") {
            runCommand(input);
            setInput("");
        }
    }

    return (


        
            <DraggableWindow className="p-8 absolute left-200 top-40 h-[670px] w-[800px] bg-[#0f0f0f] overflow-hidden font-mono text-[18px] shadow-2xl border border-white rounded-[12px]" titleBar={
                <div className="flex h-10 shrink-0 items-center justify-between border-b border-white/20 bg-[#181818] px-4">
                    <span className="text-gray-300 text-[14px]">ryuk@ryukos ~</span>
                    <button onClick={onClose}
                        className="flex h-6 w-7 items-center justify-center rounded text-gray-400 hover:bg-red-500 hover:text-white"
                    >
                        ×
                    </button>
                </div>
            } >
            <div className="flex-1 overflow-y-auto p-5">
                {
                    history.map((line, index) => (
                        <div key={index} className="mb-2 whitespace-pre-wrap">
                            {
                                line.type === "input" ? (
                                    <div>
                                        <span className="text-green-400">
                                            ryuk@ryukOS:~$
                                        </span>

                                        <span className="ml-2">
                                            {line.text}
                                        </span>
                                    </div>
                                ) : (
                                    <div className="text-gray-300">
                                        {line.text}
                                    </div>
                                )
                            }
                        </div>
                    ))
                }

                <div className="flex items-center">

                    <span className="shrink-0 text-green-400">
                        ryuk@ryukOS:~$
                    </span>

                    <input

                        ref={InputRef}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="ml-2 w-full bg-transparent outline-none"
                        autoComplete="off"
                        spellCheck={false}

                    />

                </div>
            </div>
               </DraggableWindow>

    
    )
}