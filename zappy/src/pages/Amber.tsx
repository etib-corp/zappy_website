import FooterComponent from "../components/Footer";
import { NavbarComponent } from "../components/Navbar";
import { Article } from "../components/Bloc";
import { Title } from "../components/Quote";

import amber from "../JSON/amber.json";
import RFC from "../components/RFC";

export default function Amber() {
    return (
        <div className="dark:bg-gray-800 py-2 overflow-x-hidden">
            <NavbarComponent />
            <div className="max-md:mx-8 flex items-center justify-center rounded my-10 bg-gradient-to-r from-purple-500 to-pink-500">
                <h1 className="max-lg:ml-20 max-sm:ml-5 max-sm:text-md max-md:text-2xl max-md:ml-10 text-4xl font-semibold font-sans italic overline">
                    Amber
                </h1>
                <div className="max-sm:-mx-16 max-md:-mx-10 max-lg:-mx-5">
                    <Article properties={{ title: "Performance and stability", content: "The ultimate server." }} />
                </div>
            </div>
            <Article properties={amber.Lore} />
            <Title text="Our technicals advantages" />
            <div className="flex flex-wrap justify-center">
                <div className="max-w-96 mx-5">
                    <Article properties={amber.Buffer} />
                </div>
                <div className="max-w-96 mx-5">
                    <Article properties={amber.Architecture} />
                </div>
                <div className="max-w-96 mx-5">
                    <Article properties={amber.Time} />
                </div>
                <div className="max-w-96 mx-5">
                    <Article properties={amber.Memory} />
                </div>
                <div className="max-w-96 mx-5">
                    <Article properties={amber.Error} />
                </div>
            </div>
            <Title text="Let's take a look to the RFC" />
            <RFC />
            <FooterComponent />
        </div>
    )
}