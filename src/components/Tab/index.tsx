import { useTabs } from "@/states/tabs";
import { ITab } from "@/types/tab";
import { classNames } from "@/utils/style";
import { Cross1Icon } from "@radix-ui/react-icons";
import { ShowWhen } from "../ShowWhen";

interface TabProps {
  tabData: ITab;
  active?: boolean;
}

export function Tab({ tabData, active }: TabProps) {
  const { favicon, title } = tabData;
  const { tabs, setTabs, setCurrentTab, currentTab } = useTabs();
  const isCurrentTab = tabData.id === currentTab?.id;

  const closeTab = () => {
    const newTabs = [];
    let newCurrentTab = tabs.at(0);

    for (const tab of tabs) {
      if (tab.id !== tabData.id) {
        newTabs.push(tab);
      } else if (tab.id === tabData.id - 1 || tab.id === tabData.id + 1) {
        console.log(tab);
        newCurrentTab = tab;
      }
    }

    setTabs(newTabs);
    if (newCurrentTab) {
      setCurrentTab(newCurrentTab);
    }
  };

  const switchTab = () => setCurrentTab(tabData);

  return (
    <button
      className={classNames(
        "relative h-full w-52 text-xs flex items-center p-2",
        active ? "bg-main-1" : "bg-main-3"
      )}
      onClick={switchTab}
    >
      <span className="ml-7">{title}</span>

      <img
        src={favicon || "logos/logo-colored.jpg"}
        className="absolute top-1/2 left-1 -translate-y-1/2 h-[75%] rounded-full"
      />

      <ShowWhen
        show={
          <button className="ml-auto" onClick={closeTab}>
            <Cross1Icon className="h-3 w-3" />
          </button>
        }
        when={isCurrentTab}
      />
    </button>
  );
}
