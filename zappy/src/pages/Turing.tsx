import FooterComponent from "../components/Footer";
import { NavbarComponent } from "../components/Navbar";
import { Article } from "../components/Bloc";

export default function Turing () {
    return (
        <div className="dark:bg-gray-800 py-2 overflow-x-hidden">
            <NavbarComponent />
            <div className="max-md:mx-8 flex items-center justify-center my-10 bg-gradient-to-r from-pink-500 to-red-500">
                <h1 className="max-md:text-2xl max-md:ml-10 text-4xl font-semibold font-sans italic overline">
                    Turing
                </h1>
                <div className="max-md:-mx-10">
                    <Article properties={{ title: "Dive into immersion", content: "Experience the simulation" }} />
                </div>
            </div>
            <FooterComponent />
        </div>
    );
}