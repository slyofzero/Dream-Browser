import { Header } from "./components/Header";
import { Homepage } from "./components/Homepage";

function App() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <Homepage />
    </div>
  );
}

export default App;
