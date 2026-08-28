"use client";

import { ReactNode, useRef, useState } from "react";

type DraggableWindowProps = {
    titleBar: ReactNode;
    children: ReactNode;
    className?: string;
};

export default function DraggableWindow({
    titleBar,
    children,
    className = "",
}: DraggableWindowProps) {

    const [position, setPosition] = useState({
        x: 0,
        y: 0,
    });

    const [dragging, setDragging] = useState(false);

    const dragStart = useRef({
        mouseX: 0,
        mouseY: 0,
        windowX: 0,
        windowY: 0,
    });

    const startDrag = (e: React.MouseEvent<HTMLDivElement>) => {

        setDragging(true);

        dragStart.current = {
            mouseX: e.clientX,
            mouseY: e.clientY,
            windowX: position.x,
            windowY: position.y,
        };

        const handleMouseMove = (e: MouseEvent) => {

            setPosition({
                x:
                    dragStart.current.windowX +
                    (e.clientX - dragStart.current.mouseX),

                y:
                    dragStart.current.windowY +
                    (e.clientY - dragStart.current.mouseY),
            });
        };

        const handleMouseUp = () => {

            setDragging(false);

            window.removeEventListener(
                "mousemove",
                handleMouseMove
            );

            window.removeEventListener(
                "mouseup",
                handleMouseUp
            );
        };

        window.addEventListener(
            "mousemove",
            handleMouseMove
        );

        window.addEventListener(
            "mouseup",
            handleMouseUp
        );
    };

    return (
        <div
            style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
            }}
            className={`absolute ${className}`}
        >

            {/* TITLE BAR = DRAG HANDLE */}

            <div
                onMouseDown={startDrag}
                className={
                    dragging
                        ? "cursor-grabbing"
                        : "cursor-move"
                }
            >
                {titleBar}
            </div>

            {/* WINDOW CONTENT */}

            {children}

        </div>
    );
}