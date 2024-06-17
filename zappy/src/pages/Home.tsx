import { Article } from "../components/Bloc";
import { NavbarComponent } from "../components/Navbar";

import FooterComponent from "../components/Footer";
import Quote, { Title } from "../components/Quote";
import Presentation, { Team } from "../components/Presentation";

import home from "../JSON/home-description.json";
import Roadmap from "../components/Roadmap";

export default function Home() {
    return (
        <div className="dark:bg-gray-800 py-2 overflow-x-hidden">
          <NavbarComponent />
          <Presentation />
          <Quote picture="https://companieslogo.com/img/orig/epitech-eu-28fcad28.png?t=1701708648" name="Epitech" description="IT School" text="Courage, Excellence & Solidarity." />
          <Article properties={home} />
          <Title text="Our Team:" />
          <Team />
          <Roadmap />
          <FooterComponent />
        </div>
    );
}