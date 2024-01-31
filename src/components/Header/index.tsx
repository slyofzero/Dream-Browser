import { ToolBar } from "./ToolBar";
import { TopBar } from "./TopBar";

export function Header() {
  return (
    <header className="text-white flex flex-col">
      <TopBar />
      <ToolBar />
    </header>
  );
}
