import { Cross1Icon, SquareIcon, MinusIcon } from "@radix-ui/react-icons";

export function TopBar() {
  return (
    <div className="bg-stone-950 flex gap-6 justify-end px-4 py-2">
      <button>
        <MinusIcon className="h-4 w-4" />
      </button>

      <button>
        <SquareIcon className="h-4 w-4" />
      </button>

      <button>
        <Cross1Icon className="h-4 w-4" />
      </button>
    </div>
  );
}
