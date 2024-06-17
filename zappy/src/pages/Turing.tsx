import Footer_Component from "../components/Footer";
import { Narbar_Component } from "../components/Navbar";
import { Article } from "../components/Bloc";

export default function Turing () {
    return (
        <div className="dark:bg-gray-800 py-2 overflow-x-hidden">
            <Narbar_Component />
            <div className="max-md:mx-8 flex items-center justify-center bg-tahiti my-10">
                <h1 className="max-md:text-2xl max-md:ml-10 text-4xl">
                    Turing
                </h1>
                <div className="max-md:-mx-10">
                    <Article properties={{ title: "Dive into immersion", content: "Experience the simulation" }} />
                </div>
            </div>
            <Footer_Component />
        </div>
    );
}