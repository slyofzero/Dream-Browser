import { shortCuts } from "@/utils";
import { SearchBox } from "./SearchBox";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Shortcut } from "./Shortcut";

export function HomePage() {
  return (
    <main
      className="relative flex flex-col gap-8 flex-grow items-center justify-center select-none"
      style={{ backgroundImage: "/bg.jpg" }}
    >
      <img
        src="bg.avif"
        alt="background"
        draggable={false}
        className="absolute top-0 left-0 h-full w-full -z-10 opacity-70"
      />
      <img src="logos/logo-text-transparent.png" alt="logo" className="w-64" draggable={false} />
      <img
        src="logos/logo-transparent.png"
        alt="logo"
        className="w-24 absolute top-4 left-4"
        draggable={false}
      />

      <div className="relative">
        <SearchBox className="text-black rounded-md border-[1px] border-slate-800 w-[450px] h-8 px-4 py-6 text-sm focus-within:outline-offset-0 focus-within:outline-purple-800 focus-within:outline-2 bg-main-2/50 placeholder:text-black" />
        <MagnifyingGlassIcon className="h-6 w-6 absolute top-1/2 -translate-y-1/2 right-4" />
      </div>

      <div className="flex gap-8">
        {shortCuts.map((shortcut, key) => (
          <Shortcut shortcut={shortcut} key={key} />
        ))}
      </div>
    </main>
  );
}
