import Bloc, { Article } from "../components/Bloc";
import Footer_Component from "../components/Footer";
import { Narbar_Component } from "../components/Navbar";

import onyx from "../JSON/onyx.json";

export default function Onyx() {
    return (
        <div className="dark:bg-gray-800 py-2 overflow-x-hidden">
            <Narbar_Component />
            <div className="max-md:mx-8 flex items-center justify-center my-10 bg-gradient-to-r from-tahiti to-purple-500">
                <h1 className="max-lg:ml-20 max-md:text-2xl max-md:ml-10 text-4xl font-semibold font-sans italic overline">
                    Onyx
                </h1>
                <div className="max-md:-mx-10 max-lg:-mx-5">
                    <Article properties={{ title: "Dive into immersion", content: "Experience the simulation" }} />
                </div>
            </div>
            <div className="flex flex-wrap justify-center">
                <div className="mx-16 my-10">
                    <Bloc properties={onyx["3D"]} />
                </div>
                <div className="mx-16 my-10">
                    <Bloc properties={onyx.VR} />
                </div>
                <div className="mx-16 my-10">
                    <Bloc properties={onyx.Music} />
                </div>
                <div className="mx-16 my-10">
                    <Bloc properties={onyx.Exploration} />
                </div>
                <div className="mx-16 my-10">
                    <Bloc properties={onyx.Design} />
                </div>
                <div className="mx-16 my-10">
                    <Bloc properties={onyx.Information} />
                </div>
            </div>
            <Footer_Component />
        </div>
    );
}