"use client";

import { useState } from "react";

export default function InputDock({ onAdd }: { onAdd: (text: string) => void }) {
    const [val, setVal] = useState("");

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && val.trim()) {
            onAdd(val);
            setVal("");
        }
    };

    return (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 w-[600px] max-w-[90%] bg-[var(--bg-main)] border border-[var(--glass-border)] rounded-full p-2 flex items-center shadow-[var(--shadow-hover)] z-30 transition-all">
            <div className="w-10 h-10 rounded-full bg-[var(--accent-primary)] flex items-center justify-center mr-3 shrink-0">
                <span className="block w-2 h-2 bg-white rounded-full animate-pulse" />
            </div>
            <input
                type="text"
                value={val}
                onChange={(e) => setVal(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Tell Flux what to organize..."
                className="grow bg-transparent border-none outline-none text-[var(--text-main)] text-base font-[var(--font-body)] placeholder:text-[var(--text-muted)] h-full"
            />
        </div>
    );
}
