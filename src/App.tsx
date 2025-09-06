import "./App.css";
import Comp from "./components/Comp";
import Mob_Nav from "./components/Mob_Nav";

function App() {
  return (
    <main className="flex flex-col gap-6">
      <Mob_Nav />
      <Comp />
    </main>
  );
}

export default App;
