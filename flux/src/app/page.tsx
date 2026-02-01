"use client";

import { useState, useEffect } from "react";
import Orb from "@/components/Orb";
import ThemeEngine from "@/components/ThemeEngine";
import NoteCard from "@/components/NoteCard";
import InputDock from "@/components/InputDock";

export default function Home() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }, 1000); // Update every second
    return () => clearInterval(timer);
  }, []);

  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "Q4 Design System",
      body: "Refactor the token engine. We need to support dynamic font loading for the new \"Brutalist\" mode.",
      category: "work",
      date: "TODAY 09:00",
      size: "wide",
      tag: "ARCHITECT"
    },
    {
      id: 2,
      title: "Generative UI",
      body: "The interface should feel like liquid. Notes shouldn't just sit there; they should drift.",
      category: "journal",
      date: "YESTERDAY",
      size: "normal",
      tag: "THOUGHTS"
    },
    {
      id: 3,
      title: "Client Sync",
      body: "Review mockups, approve color palette, sign off on 'Cute' theme.",
      category: "work",
      date: "UPCOMING",
      size: "tall",
      tag: "MEETING"
    }
  ]);

  const addNote = (text: string) => {
    const isUrgent = text.toLowerCase().includes("urgent");
    const newNote = {
      id: Date.now(),
      title: "New Entry",
      body: text,
      category: isUrgent ? "work" : "journal", // simple logic
      date: "JUST NOW",
      size: "normal",
      tag: isUrgent ? "URGENT" : "NOTE"
    };
    // @ts-ignore
    setNotes([newNote, ...notes]);
  };

  return (
    <main className="min-h-screen p-8 pb-32 relative">
      {/* <Orb /> System cursor requested for now */}

      {/* Background Mesh (Css handled global or we add div) */}
      <div className="fixed inset-0 -z-10 opacity-[var(--mesh-opacity)] transition-opacity duration-500 pointer-events-none"
        style={{
          background: `
                radial-gradient(circle at 15% 50%, rgba(76, 29, 149, 0.2), transparent 50%),
                radial-gradient(circle at 85% 30%, rgba(50, 80, 60, 0.2), transparent 50%),
                radial-gradient(circle at 50% 80%, rgba(20, 20, 20, 0.2), transparent 100%)
             `,
          filter: "blur(60px)"
        }}
      />

      {/* Header */}
      <header className="flex justify-between items-start mb-16 max-w-[1400px] mx-auto">
        <div>
          <h1 className="font-[var(--font-serif)] text-6xl font-normal leading-[0.9] tracking-[-0.02em]">Flux.</h1>
          <div className="flex gap-2 mt-4 ml-1">
            <button className="px-4 py-1.5 rounded-full border border-[var(--glass-border)] text-[var(--text-muted)] text-xs font-mono hover:bg-[var(--text-main)] hover:text-[var(--bg-main)] transition-colors active">Focus</button>
            <button className="px-4 py-1.5 rounded-full border border-[var(--glass-border)] text-[var(--text-muted)] text-xs font-mono hover:bg-[var(--text-main)] hover:text-[var(--bg-main)] transition-colors">Creative</button>
          </div>
        </div>

        <div className="flex flex-col items-end gap-4">
          <ThemeEngine />
          <div className="text-right font-mono text-xs text-[var(--text-muted)]">
            <p>{time}</p>
            <p className="text-[var(--accent-secondary)]">AI AGENT ACTIVE</p>
          </div>
        </div>
      </header>

      {/* Grid */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[240px] gap-6">
        {notes.map((note) => (
          // @ts-ignore
          <NoteCard key={note.id} {...note} />
        ))}
      </div>

      <InputDock onAdd={addNote} />
    </main>
  );
}
