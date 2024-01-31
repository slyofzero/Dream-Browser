import { useViewSrc } from "./view";

export function useGlobalStates() {
  const viewSrcStates = useViewSrc();

  return { ...viewSrcStates };
}
