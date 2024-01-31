import { useTabs } from "./tabs";
import { useViewSrc } from "./view";

export function useGlobalStates() {
  const viewSrcStates = useViewSrc();
  const tabsState = useTabs();

  return { ...viewSrcStates, ...tabsState };
}
