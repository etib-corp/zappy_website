import Bloc, { Article } from "../components/Bloc";
import Footer_Component from "../components/Footer";
import { Narbar_Component } from "../components/Navbar";

import onyx from "../JSON/onyx.json";

export default function Onyx() {
    return (
        <div className="dark:bg-gray-800 py-2">
            <Narbar_Component />
            <div className="flex justify-center items-center bg-violet-500 my-10">
                <h1 className="text-4xl font-bold">Onyx</h1>
                <Article properties={{ title: "Dive into immersion", content: "Experience the simulation" }} />
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