import { ShortcutI } from "@/types/shortcut";
import { ShowWhen } from "./ShowWhen";
import { DrawingPinFilledIcon } from "@radix-ui/react-icons";

interface ShortcutProps {
  shortcut: ShortcutI;
}

export function Shortcut({ shortcut }: ShortcutProps) {
  const { title, image, pinned } = shortcut;

  return (
    <button className="flex flex-col items-center gap-1">
      <img src={image} className="h-16 w-16 aspect-square bg-main-2/60 p-4 rounded-lg" alt="" />
      <span className="text-xs mx-auto flex gap-1 items-center">
        <ShowWhen show={<DrawingPinFilledIcon className="h-3 w-3" />} when={pinned} /> {title}
      </span>
    </button>
  );
}
