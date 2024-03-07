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
        <div className="rounded-md bg-slate-700 p-5 space-y-3 overflow-hidden">
          <span
            className="text-sm font-medium text-slate-200">
            adicionar nota
          </span>
          <p
            className="text-sm leading-6 text-slate-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, eos adipisci suscipit consequatur repudiandae eaque esse ab expedita, magni repellendus tenetur commodi quos quam. Eius voluptates distinctio labore officiis quo!
          </p>

        </div>

        <NoteCard />
      </div>
    </div>
  )
}
