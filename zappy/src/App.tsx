import { DarkThemeToggle } from "flowbite-react";

import Bloc from "./components/Bloc";
import { Narbar_Component } from "./components/Navbar";
import Presentation from "./components/Presentation";

function App() {
  return (
    <main>
      {/* <DarkThemeToggle /> */}
      <Narbar_Component />
      <div className="">
        <Presentation />
      </div>
    </main>
  );
}

export default App;
