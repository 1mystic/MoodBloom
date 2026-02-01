"use client";

import { useState, useEffect } from "react";

const themes = [
    { id: "flux", name: "Flux (Original)", color: "#444" },
    { id: "neon", name: "Neon Cyber", color: "#0ff" },
    { id: "minimalist", name: "Minimalist", color: "#eee" },
    { id: "brutalist", name: "Neo-Brutalist", color: "#ff6b6b" },
    { id: "terminal", name: "Terminal / CLI", color: "#33ff00" },
];

export default function ThemeEngine() {
    const [isOpen, setIsOpen] = useState(false);
    const [currentTheme, setCurrentTheme] = useState("flux");

    useEffect(() => {
        // Sync with HTML attribute
        const root = document.documentElement;
        const saved = localStorage.getItem("flux-theme") || "flux";
        root.setAttribute("data-theme", saved);
        setCurrentTheme(saved);
    }, []);

    const setTheme = (themeFn: string) => {
        document.documentElement.setAttribute("data-theme", themeFn);
        localStorage.setItem("flux-theme", themeFn);
        setCurrentTheme(themeFn);
    };

    return (
        <div className="relative z-50">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--glass-border)] bg-[var(--glass-surface)] text-[var(--text-main)] backdrop-blur-md text-xs font-mono hover:scale-95 transition-transform"
            >
                <span>🎨 Theme Engine</span>
                <span className="text-[10px] opacity-50">▼</span>
            </button>

            {isOpen && (
                <>
                    <div
                        className="fixed inset-0 z-40"
                        onClick={() => setIsOpen(false)}
                    />
                    <div className="absolute top-full right-0 mt-3 w-48 p-2 rounded-2xl border border-[var(--glass-border)] bg-[var(--bg-main)] shadow-xl z-50 flex flex-col gap-1 max-h-64 overflow-y-auto">
                        {themes.map((t) => (
                            <button
                                key={t.id}
                                onClick={() => setTheme(t.id)}
                                className={`flex items-center justify-between w-full px-3 py-2 rounded-lg text-xs font-[var(--font-body)] hover:bg-[var(--glass-highlight)] hover:text-[var(--text-highlight)] transition-colors text-left
                  ${currentTheme === t.id ? "text-[var(--text-main)]" : "text-[var(--text-muted)]"}
                `}
                            >
                                <div className="flex items-center gap-2">
                                    <span
                                        className="w-2.5 h-2.5 rounded-full border border-white/10"
                                        style={{ background: t.color }}
                                    />
                                    {t.name}
                                </div>
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
