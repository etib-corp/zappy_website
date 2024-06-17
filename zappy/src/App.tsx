import Home from "./pages/Home";
import Onyx from "./pages/Onyx";
import Amber from "./pages/Amber";
import Turing from "./pages/Turing";

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <main>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/onyx" element={<Onyx />} />
          <Route path="/amber" element={<Amber />} />
          <Route path="/turing" element={<Turing />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
