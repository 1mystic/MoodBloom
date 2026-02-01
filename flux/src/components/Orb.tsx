"use client";

import { useEffect, useState } from "react";

export default function Orb() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [target, setTarget] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        // Mouse Move Handler
        const handleMouseMove = (e: MouseEvent) => {
            setTarget({ x: e.clientX, y: e.clientY });

            // Check if hovering interactive
            const hovered = (e.target as HTMLElement).closest('button, a, input, .interactive');
            setIsHovering(!!hovered);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    useEffect(() => {
        // Animation Loop
        let animationFrameId: number;

        const animate = () => {
            setPosition((prev) => {
                const speed = 0.15;
                const dx = target.x - prev.x;
                const dy = target.y - prev.y;
                return {
                    x: prev.x + dx * speed,
                    y: prev.y + dy * speed,
                };
            });
            animationFrameId = requestAnimationFrame(animate);
        };

        animate();
        return () => cancelAnimationFrame(animationFrameId);
    }, [target]);

    return (
        <div
            className={`fixed pointer-events-none z-50 rounded-full transition-all duration-300 ease-out mix-blend-exclusion
        ${isHovering ? "w-20 h-20 bg-transparent border border-white backdrop-blur-sm" : "w-8 h-8 bg-white/90"}
      `}
            style={{
                left: position.x,
                top: position.y,
                transform: "translate(-50%, -50%)",
            }}
        />
    );
}
