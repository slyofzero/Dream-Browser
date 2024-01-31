import { useEffect } from "react";
import { useGlobalStates } from "./states";
import { ITab } from "./types/tab";
import { Header } from "./components/Header";
import { WebPage } from "./components/WebPage";

function App() {
  const { tabs, addTab, setCurrentTab } = useGlobalStates();
  useEffect(() => {
    console.log(tabs.length);
    if (!tabs.length) {
      const newTab: ITab = { id: 1, title: "New Tab", favicon: "" };
      addTab(newTab);
      setCurrentTab(newTab);
    }
  }, [tabs, addTab, setCurrentTab]);

  return (
    <div className="h-screen flex flex-col">
      <Header />
      <WebPage />
    </div>
  );
}

export default App;
