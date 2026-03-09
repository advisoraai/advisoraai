"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", updateMousePosition);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
        };
    }, []);

    return (
        <motion.div
            className="pointer-events-none fixed top-0 left-0 z-[9999] h-4 w-4 rounded-full bg-primary mix-blend-difference"
            animate={{ x: mousePosition.x - 8, y: mousePosition.y - 8 }}
            transition={{ type: "spring", stiffness: 500, damping: 28 }}
        />
    );
}
