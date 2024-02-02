import { useGlobalStates } from "../states";
import { HomePage } from "./HomePage";
import { ShowWhen } from "./ShowWhen";
// import { SplitScreen } from "./SplitScreen";

export function WebPage() {
  const { viewSrc } = useGlobalStates();
  const view = <webview id="view" src={viewSrc} className="flex-grow"></webview>;

  return <ShowWhen show={view} when={viewSrc} otherwise={<HomePage />} />;
}
