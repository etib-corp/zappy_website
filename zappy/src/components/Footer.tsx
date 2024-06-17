import { Footer, DarkThemeToggle } from "flowbite-react";

export default function Footer_Component () {
    return (
        <Footer container className="min-w-screen-md max-md:mx-1 flex items-center space-x-14">
        <Footer.Copyright href="#" by="by Etib Corp™" year={2024} />
        <Footer.LinkGroup>
            <div className="flex items-center space-x-4">
                <Footer.Link href="#">GitHub</Footer.Link>
                <Footer.Link href="#">Docs</Footer.Link>
                <DarkThemeToggle />
            </div>
        </Footer.LinkGroup>
        </Footer>
    );
}