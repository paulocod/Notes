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

        <div className="rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden relative">
          <span
            className="text-sm font-medium text-slate-300">
            ha 2 dias
          </span>
          <p
            className="text-sm leading-6 text-slate-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nihil illum, voluptatum quam quidem odit, blanditiis dolores sunt voluptate dignissimos atque provident amet reiciendis unde adipisci, nobis quod est quis!
          </p>
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
        </div>

        <div className="rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden relative">
          <span
            className="text-sm font-medium text-slate-300">
            ha 4 dias
          </span>
          <p
            className="text-sm leading-6 text-slate-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur eaque magni modi veniam velit numquam aspernatur laudantium, tempora quia adipisci libero rem, illo repellendus dolor possimus temporibus unde pariatur perspiciatis?
          </p>
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
        </div>

      </div>
    </div>
  )
}
