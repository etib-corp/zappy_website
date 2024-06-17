import Footer_Component from "../components/Footer";
import { Narbar_Component } from "../components/Navbar";
import { Article } from "../components/Bloc";
import { Title } from "../components/Quote";

import turing from "../JSON/turing.json";

export default function Turing () {
    return (
        <div className="dark:bg-gray-800 py-2 overflow-x-hidden">
            <Narbar_Component />
            <div className="max-md:mx-8 flex items-center justify-center my-10 bg-gradient-to-r from-pink-500 to-red-500">
                <h1 className="max-md:text-2xl max-md:ml-10 text-4xl">
                    Turing
                </h1>
                <div className="max-md:-mx-10">
                    <Article properties={{ title: "Work smarter, not harder", content: "Be impressed by our logic" }} />
                </div>
            </div>
            <div className="flex flex-wrap justify-center">
                <div className="w-3/4 max-md:w-lvw">
                    <Article properties={turing.Turing} />
                    <Article properties={turing.How} />
                </div>
                <div className="w-2/3 max-md:w-11/12">
                    <Title text="The Mother" />
                    <Article properties={turing.Mother} />
                </div>
                <div className="w-2/3 max-md:w-11/12">
                    <Title text="The suicidal child" />
                    <Article properties={turing.Suicidal} />
                </div>
                <div className="w-2/3 max-md:w-11/12">
                    <Title text="The Niffler (the collector)" />
                    <Article properties={turing.Collector} />
                </div>
                <div className="w-2/3 max-md:w-11/12">
                    <Title text="The Pilot fish (the evolver)" />
                    <Article properties={turing.Evolver} />
                </div>
            </div>
            <Footer_Component />
        </div>
    );
}