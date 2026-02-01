"use client";

import clsx from "clsx";

interface NoteCardProps {
    title: string;
    body: string;
    category: "work" | "journal" | "creative"; // simplified
    size?: "wide" | "tall" | "normal";
    date?: string;
    tagText?: string;
}

export default function NoteCard({ title, body, category, size = "normal", date = "JUST NOW", tagText = "NOTE" }: NoteCardProps) {

    const getPillStyle = () => {
        switch (category) {
            case "work": return "bg-[rgba(198,240,153,0.2)] text-[var(--accent-secondary)] border-[var(--accent-secondary)]";
            case "journal": return "bg-[rgba(187,154,247,0.2)] text-[var(--accent-primary)] border-[var(--accent-primary)]";
            default: return "bg-[rgba(187,154,247,0.2)] text-[var(--accent-primary)] border-[var(--accent-primary)]";
        }
    };

    return (
        <div
            className={clsx(
                "note-card glass-panel p-6 flex flex-col justify-between transition-all hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[var(--shadow-hover)] hover:border-[var(--glass-highlight)]",
                size === "wide" && "col-span-1 md:col-span-2",
                size === "tall" && "row-span-1 md:row-span-2"
            )}
        >
            {/* Header */}
            <div className="flex justify-between mb-3">
                <span className="font-mono text-[0.65rem] opacity-50 uppercase tracking-widest">{date}</span>
                {category === 'work' && <span>⚡</span>}
            </div>

            {/* Content */}
            <h3 className="font-[var(--font-body)] font-semibold text-lg mb-2 text-[var(--text-main)]">{title}</h3>
            <p className="font-[var(--font-body)] text-[0.95rem] text-[var(--text-muted)] leading-relaxed grow">{body}</p>

            {/* Footer / Pill */}
            <div className="mt-4 flex gap-2">
                <span
                    className={`font-mono text-[10px] px-2.5 py-1 rounded-full border uppercase ${getPillStyle()}`}
                >
                    {tagText}
                </span>
            </div>
        </div>
    );
}
