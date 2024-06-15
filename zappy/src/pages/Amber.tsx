import Footer_Component from "../components/Footer";
import { Narbar_Component } from "../components/Navbar";
import { Article } from "../components/Bloc";
import { Title } from "../components/Quote";

import amber from "../JSON/amber.json";
import RFC from "../components/RFC";

export default function Amber() {
    return (
        <div className="dark:bg-gray-800 py-2">
            <Narbar_Component />
            <div className="flex justify-center items-center bg-red-400 my-10">
                <h1 className="text-4xl font-bold">
                    Amber
                </h1>
                <Article properties={{ title: "Performance and stability", content: "The ultimate server." }} />
            </div>
            <Article properties={amber.Lore} />
            <Title text="Our technicals advantages" />
            <div className="flex flex-wrap justify-center">
                <div className="max-w-96 mx-10">
                    <Article properties={amber.Buffer} />
                </div>
                <div className="max-w-96 mx-10">
                    <Article properties={amber.Architecture} />
                </div>
                <div className="max-w-96 mx-10">
                    <Article properties={amber.Time} />
                </div>
                <div className="max-w-96 mx-10">
                    <Article properties={amber.Memory} />
                </div>
                <div className="max-w-96 mx-10">
                    <Article properties={amber.Error} />
                </div>
            </div>
            <Title text="Let's take a look to the RFC" />
            <RFC />
            <Footer_Component />
        </div>
    )
}