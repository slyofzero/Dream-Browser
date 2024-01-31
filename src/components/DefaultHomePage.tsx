import { SearchBox } from "./SearchBox";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

export function DefaultHomePage() {
  return (
    <main className="flex flex-col gap-8 flex-grow items-center justify-center select-none">
      <img src="/logos/logo.JPG" alt="logo" className="w-64" draggable={false} />

      <div className="relative">
        <SearchBox className="bg-white rounded-md border-[1px] border-slate-800 w-[450px] h-8 px-4 py-6 text-sm focus-within:outline-offset-0 focus-within:outline-purple-800 focus-within:outline-2" />
        <MagnifyingGlassIcon className="h-6 w-6 absolute top-1/2 -translate-y-1/2 right-4" />
      </div>
    </main>
  );
}
