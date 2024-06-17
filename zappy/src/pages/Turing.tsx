import Footer_Component from "../components/Footer";
import { Narbar_Component } from "../components/Navbar";

export default function Turing () {
    return (
        <div className="dark:bg-gray-800 py-2">
            <Narbar_Component />
            
            <Footer_Component />
        </div>
    );
}