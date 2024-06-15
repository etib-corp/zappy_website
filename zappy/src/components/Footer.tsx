import { Footer, DarkThemeToggle } from "flowbite-react";

export default function Footer_Component () {
    return (
        <Footer container className="">
        <Footer.Copyright href="#" by="by Etib Corp™" year={2024} />
        <Footer.LinkGroup>
            <Footer.Link href="#">GitHub</Footer.Link>
            <Footer.Link href="#">Docs</Footer.Link>
            <DarkThemeToggle />
        </Footer.LinkGroup>
        </Footer>
    );
}