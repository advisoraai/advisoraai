"use client";

import { motion } from "framer-motion";

export function NetworkGraph() {
    const nodes = [
        { x: 30, y: 30 }, { x: 70, y: 20 }, { x: 50, y: 50 },
        { x: 20, y: 70 }, { x: 80, y: 60 }, { x: 50, y: 85 }
    ];

    const connections = [
        [0, 1], [0, 2], [1, 2], [2, 3], [2, 4], [3, 5], [4, 5], [0, 3], [1, 4]
    ];

    return (
        <svg viewBox="0 0 100 100" className="w-full h-full text-primary">
            {connections.map(([start, end], i) => (
                <motion.line
                    key={i}
                    x1={nodes[start].x}
                    y1={nodes[start].y}
                    x2={nodes[end].x}
                    y2={nodes[end].y}
                    stroke="currentColor"
                    strokeWidth="0.5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.2 }}
                    transition={{ duration: 2, delay: i * 0.2, repeat: Infinity, repeatType: "reverse" }}
                />
            ))}
            {nodes.map((node, i) => (
                <motion.circle
                    key={i}
                    cx={node.x}
                    cy={node.y}
                    r="3"
                    fill="currentColor"
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1.2, 1] }}
                    transition={{ duration: 1, delay: i * 0.1, repeat: Infinity, repeatDelay: 3 }}
                />
            ))}
        </svg>
    );
}

export function HexGrid() {
    const hexes = [
        { x: 30, y: 30 }, { x: 50, y: 30 }, { x: 70, y: 30 },
        { x: 40, y: 45 }, { x: 60, y: 45 },
        { x: 30, y: 60 }, { x: 50, y: 60 }, { x: 70, y: 60 }
    ];

    return (
        <svg viewBox="0 0 100 100" className="w-full h-full text-primary/40">
            {hexes.map((hex, i) => (
                <motion.path
                    key={i}
                    d="M10,0 L18.66,5 L18.66,15 L10,20 L1.34,15 L1.34,5 Z"
                    transform={`translate(${hex.x - 10}, ${hex.y - 10})`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: [0.1, 0.4, 0.1], scale: [0.8, 1, 0.8] }}
                    transition={{ duration: 3, delay: i * 0.3, repeat: Infinity }}
                />
            ))}
            <motion.path
                d="M30,30 L50,30 L60,45 L50,60 L30,60 L20,45 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-primary"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 4, repeat: Infinity }}
            />
        </svg>
    );
}

export function VerticalPipeline() {
    return (
        <svg viewBox="0 0 100 100" className="w-full h-full">
            <motion.path
                d="M50,10 V90"
                stroke="rgba(255, 214, 0, 0.1)"
                strokeWidth="4"
                strokeLinecap="round"
            />
            <motion.path
                d="M50,10 V90"
                stroke="#FFD600"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            {[20, 40, 60, 80].map((y, i) => (
                <motion.circle
                    key={i}
                    cx="50"
                    cy={y}
                    r="4"
                    fill="#002A30"
                    stroke="#FFD600"
                    strokeWidth="1"
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1.2, 1] }}
                    transition={{ delay: i * 0.5, repeat: Infinity, repeatDelay: 1 }}
                />
            ))}
        </svg>
    );
}

export function DeliveryPipeline() {
    return (
        <div className="flex flex-col gap-4 w-full px-4">
            {[0.8, 0.6, 0.9].map((progress, i) => (
                <div key={i} className="space-y-2">
                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-primary"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${progress * 100}%` }}
                            transition={{ duration: 1.5, delay: i * 0.2 }}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}
