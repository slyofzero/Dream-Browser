import { useGlobalStates } from "@/states";
import { ITab } from "@/types/tab";
import { PlusIcon } from "@radix-ui/react-icons";

export function NewTab() {
  const { tabs, addTab, setCurrentTab } = useGlobalStates();
  const addNewTab = () => {
    const newTab: ITab = { id: tabs.length + 1, title: "New Tab", favicon: "" };
    addTab(newTab);
    setCurrentTab(newTab);
  };

  return (
    <button
      className="flex items-center justify-center bg-none hover:bg-main-1 h-full aspect-square"
      onClick={addNewTab}
    >
      <PlusIcon />
    </button>
  );
}
