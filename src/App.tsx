import "./App.css";
import Comp from "./components/Comp";
import Lg_Nav from "./components/Lg_Nav";
import Mob_Nav from "./components/Mob_Nav";

function App() {
  return (
    <main className="flex flex-col lg:flex-row gap-6 lg:gap-0 min-h-screen">
      <Mob_Nav />
      <Lg_Nav />
      <Comp />
    </main>
  );
}

export default App;
