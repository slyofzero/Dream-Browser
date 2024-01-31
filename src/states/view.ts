import { useAtom, atom } from "jotai";

const defaultValue = "";
const viewSrcAtom = atom(defaultValue);

export function useViewSrc() {
  const [viewSrc, setViewSrc] = useAtom(viewSrcAtom);
  const resetViewSrc = () => setViewSrc(defaultValue);

  return { viewSrc, setViewSrc, resetViewSrc };
}
