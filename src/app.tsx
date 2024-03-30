import { useState } from "react";
import { NewNoteCard } from "./components/newNoteCard";
import { NoteCard } from "./components/noteCard";

export function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      date: new Date(),
      content: 'hello world'
    }
  ])

  function onNoteCreated(content: string) {
    const newNote = {
      id: Math.random(),
      date: new Date(),
      content,
    }

    setNotes([newNote, ...notes])
  }

  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6">
      <form className="w-full">
        <input
          type="text"
          placeholder="Busque em suas notes..."
          className="w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500"
        />
      </form>

      <div className="h-px bg-slate-700" />

      <div className="grid grid-cols-3 gap-6 auto-rows-[250px]">
        <NewNoteCard onNoteCreated={onNoteCreated}/>
        {notes.map(note => {
          return <NoteCard key={note.id} note={note} />
        })}
      </div>
    </div>
  )
}
