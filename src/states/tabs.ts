import { ITab } from "@/types/tab";
import { atom, useAtom } from "jotai";

const defaultTabs: ITab[] = [
  { id: 1, title: "DexScreener", favicon: "shortcuts/dex-screener.png" },
];
const defaultActiveTab: ITab | null = null;

const tabsAtom = atom(defaultTabs);
const currentTabAtom = atom<ITab | null>(defaultActiveTab);

export function useTabs() {
  const [tabs, setTabs] = useAtom(tabsAtom);
  const [currentTab, setCurrentTab] = useAtom(currentTabAtom);

  function addTab(newTab: ITab) {
    setTabs([...tabs, newTab]);
  }

  return { tabs, setTabs, addTab, currentTab, setCurrentTab };
}
