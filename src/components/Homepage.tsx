import { useGlobalStates } from "../states";
import { DefaultHomePage } from "./DefaultHomePage";
import { ShowWhen } from "./ShowWhen";

export function Homepage() {
  const { viewSrc } = useGlobalStates();
  const view = <webview id="view" src={viewSrc} className="flex-grow"></webview>;

  return <ShowWhen show={view} when={viewSrc} otherwise={<DefaultHomePage />} />;
}
