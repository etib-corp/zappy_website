import { Article } from "./components/Bloc";
import { Narbar_Component } from "./components/Navbar";

import Footer_Component from "./components/Footer";
import Quote, { Title } from "./components/Quote";
import Presentation, { Team } from "./components/Presentation";

import home from "./JSON/home-description.json";
import GetButton from "./components/GetButton";

function App() {
  return (
    <main >
        <div className="dark:bg-gray-800 py-2">
          <Narbar_Component />
          <Presentation />
          <Quote picture="https://companieslogo.com/img/orig/epitech-eu-28fcad28.png?t=1701708648" name="Epitech" description="IT School" text="Courage, Excellence & Solidarity." />
          <Article properties={home} />
          <Title text="Our Team:" />
          <Team />
          <GetButton />
          <Footer_Component />
        </div>
    </main>
  );
}

export default App;
