import { NewNoteCard } from "./components/newNoteCard";
import { NoteCard } from "./components/noteCard";

export function App() {
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
        <NewNoteCard />
        <NoteCard />
      </div>
    </div>
  )
}
