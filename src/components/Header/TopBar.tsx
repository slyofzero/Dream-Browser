import { useGlobalStates } from "@/states";
import { Cross1Icon, SquareIcon, MinusIcon } from "@radix-ui/react-icons";
import { Tab } from "../Tab";
import { NewTab } from "../Tab/NewTab";

export function TopBar() {
  const { tabs, currentTab } = useGlobalStates();

  return (
    <div className="bg-main-3 flex justify-between">
      <div className="flex h-full p-[0.18rem] [&>div]:rounded-sm gap-[0.18rem]">
        {tabs.map((tabData, key) => (
          <Tab key={key} tabData={tabData} active={currentTab?.id === tabData.id} />
        ))}

        <NewTab />
      </div>

      <div className="flex gap-6 justify-end px-4 py-2">
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
    </div>
  );
}
